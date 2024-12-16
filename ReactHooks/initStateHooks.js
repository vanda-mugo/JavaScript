/*Hooks are functions in react that give class like abilities to function components, using state and side effects
import React, { useHook } from 'react';

Hooks are imported at the top of a file from the react library:

    Note: The code snippet above is purely pseudocode and useHook is not an actual React hook.

Hooks

useContext()
    Subscribes a component to a context which includes its value prop that exists further up the component tree.

useEffect()
    Takes in a function and an array. The function will be executed after the current render phase finishes and only if the elements 
    inside the array has changed from the previous render.

useRef()
    Creates mutable references to elements or values, allowing access to them without causing re-renders.

useState()
    Returns the current state of the component and its setter function
*/

//use state setters outside jsx 

import React, {useState} from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  // declare current state and state setter 
  const [phone, setPhone] = useState("");

  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
        // update state 
        setPhone(newPhone);
    }
    // just ignore the event, when new value is invalid
    <input value={phone} onChange={handleChange} id='phone-input' />

  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />

    </div>
  );
}


//setting from previous state

export default function QuizNavBar({ questions }) {
    const [questionIndex, setQuestionIndex] = useState(0);
  
    // define event handlers 
    const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
  
    // determine if on the first question or not 
    const goToNext = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
  
    const onLastQuestion = questionIndex === questions.length - 1;
    const onFirstQuestion = questionIndex === 0;
  
    return (
      <nav>
        <span>Question #{questionIndex + 1}</span>
        <div>
          <button onClick={goBack} disabled={onFirstQuestion}>
            Go Back
          </button>
          <button disabled={onLastQuestion} onClick={goToNext}>
            Next Question
          </button>
        </div>
      </nav>
    );
  }



//arrays in state
  function ItemList({ items, onItemClick }) {
    const handleClick = ({ target }) => {
      const item = target.value;
      onItemClick(item);
    };
    return (
      <div>
        {items.map((item, index) => (
          <button value={item} onClick={handleClick} key={index}>
            {item}
          </button>
        ))}
      </div>
    );
  }

  produce = [
    "Carrots",
    "Cucumbers",
    "Bell peppers",
    "Avocados",
    "Spinach",
    "Kale",
    "Tomatoes",
    "Bananas",
    "Lemons",
    "Ginger",
    "Onions",
    "Potatoes",
    "Sweet potatoes",
    "Purple cabbage",
    "Broccoli",
    "Mushrooms",
    "Cilantro"
  ];
  //arrays in state
  export const pantryItems = [
    "Chia",
    "Goji berries",
    "Peanut butter",
    "Bread",
    "Cashews",
    "Pumpkin seeds",
    "Peanuts",
    "Olive oil",
    "Sesame oil",
    "Tamari",
    "Pinto beans",
    "Black beans",
    "Coffee",
    "Rice",
    "Dates",
    "Quinoa"
  ];
  

  
  //arrays in state
  export default function GroceryCart() {
    // declare and initialize state 
    const [cart, setCart] = useState([]);
    const addItem = (item) => {
      setCart(prevArray => [item, ...prevArray]);
     };
  
    const removeItem = (targetIndex) => {
      setCart(prevArray => {
        return prevArray.filter((value,index) => index !== targetIndex );
      })
    };
  
    return (
      <div>
        <h1>Grocery Cart</h1>
        <ul>
          {cart.map((item, index) => (
            <li onClick={() => removeItem(index)} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <h2>Produce</h2>
        <ItemList items={produce} onItemClick={addItem} />
        <h2>Pantry Items</h2>
        <ItemList items={pantryItems} onItemClick={addItem} />
      </div>
    );
  }
  

  //object in state
  function EditProfile() {
    const [profile, setProfile] = useState({});
  
    const handleChange = ({ target }) => {
      const {name, value} = target;
      setProfile((prev) => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(profile, '', 2));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={profile.firstName || ''}
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          value={profile.lastName || ''}
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          value={profile.bday || ''}
          type="date"
          name="bday"
          onChange={handleChange}
        />
        <input
          value={profile.password || ''}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      
    );
  }


  //separating hooks 


  function Subject() {
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma'],
    classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201},
    exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]
  })}


  // the above is complicated because you would have to change as above using the useState setState

  setState((prev) => ({
    ...prev,
     exams: prev.exams.map((exam) => {
       if( exam.unit === updatedExam.unit ){
         return { 
           ...exam,
           score: updatedExam.score
         };
       } else {
         return exam;
       }
     }),

    
   }));
   

   // this can be simplified to 
   function Subject() {
    const [currentGrade, setGrade] = useState('B');
    const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
    const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
    const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
    // ...
  }
  