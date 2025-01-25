import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../../assets/img/header-img.svg';
import { useState, useEffect } from "react";
import './Banner.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import TrueFocus from '../TrueFocus/TrueFocus';


export const Banner = (): JSX.Element => {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    // initialise toRotate array with strings
    const toRotate : string[] = ['Web Developer', 'Designer', 'Freelancer', 'C++ Developer', 'Software Engineer'];
    // delta can range anywhere between 200 to 300, this is milliseconds 
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    // this useEffect will run each time the text state changes 
    useEffect(() => {
        //  initialising a variable called ticker that runs every period instance of delta time
        // this can  run every 200ms to 300ms based on delta
        // variable ticker stores the reference to the setInterval function,
        // this enables us to clear the interval when the component is unmounted or changes in 
        // dependencies in this case text
        let ticker = setInterval(() => {
            tick();
        },delta)
        // Clear the interval when the component unmounts or when the useEffect hook is called again
        return () => {
            clearInterval(ticker);
        };   
    },[text]);// The useEffect hook depends on the text state

    const tick = (): void => {
        // initially loopNum is 0, so i will be 0
        let i : number = loopNum % toRotate.length; // initially will be 0
        // the loopNum determines the string in the toRotate array
        // get the full text from toRotate array, initially will be 'Web Developer'
        let fullText = toRotate[i];
        // initially isDeleting is false, so updatedText will be 'W'
        // initially text is empty string, so updatedText will be 'W'
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        // initially set to 'W'// this runs every 200ms to 300ms
        // note by that in react state updates are asynchronous, therefore the current tick() function will not be able to see the updated text state
        setText(updatedText);
        // initially isDeleting is false, so delta will be 300
        if(isDeleting){
            // the instance that isDeleting is true, we will set delta to half the previous value to speed up the deleting process
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText) {
            // in the instance that isDeleting is false and updatedText is equal to fullText, we need to set isDeleting to true
            // set delta to 2000ms, that means that the first letter will be displayed for 2 seconds before its deleted
            // the rest of the words will be displayed for half the previous letters timing before they are deleted
            setDelta(period);
            setIsDeleting(true);
        }else if(isDeleting && updatedText === '') {
            // in the case that the isDeleting is true and updatedText is empty string, we need to set isDeleting to false
            // We need to set the delta to 500ms, this is the time it takes to display the next word
            // we also need to increment the loopNum to display the next word
            setDelta(250);
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible  }) => 
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>    
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{"Hi I'm "}<span className="devname" ><TrueFocus 
                                                                                sentence="John Mugo"
                                                                                manualMode={false}
                                                                                blurAmount={7}
                                                                                borderColor="red"
                                                                                animationDuration={1}
                                                                                pauseBetweenAnimations={1}
                                                                                /></span></h1>
                                    <h1>I'm a <span className="txt-rotate"  data-rotate='["Web Developer", "Designer", "Freelancer", "C++ Developer", "Software Engineer"]'><span className="wrap">{text}</span></span></h1>
                                    <p>dummy text of the printing and typesetting industry </p>
                                    <button onClick={():void => console.log('connect')}>Lets connect<ArrowRightCircle size={25} /></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} id="header-img">
                        <TrackVisibility>
                            {({ isVisible  }) => 
                                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                    <img src={headerImg} alt="Header img" />
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

// note by clearing the interval when the component unmounts, we are preventing memory leaks. This ensures that only one setInterval is 
// running at a time. This is a good practice to follow when working with setInterval in react components.