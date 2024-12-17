import React, { useState } from "react";

function Button(props){
    const [showFact, setShowFact] = useState(false);

    function handleClick(){
        setShowFact(!showFact);
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Cool Fact!</button>
            {showFact && ( <div> 
                <p>{props.fact}</p>
                <br />
                <img src={props.src} alt="Dinosaur" className="din" /> 
                </div> )}
        </div>
    ); 
}

export default Button;