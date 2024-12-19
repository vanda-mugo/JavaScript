import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  // get the navigate function
  const navigate = useNavigate();

  const goBack = () => {
    // imperatively redirect back
    navigate(-1);
  }

  const goForward = () => {
    // imperatively redirect forward
    navigate(+1);
    
  }

  return (
    <footer style={{backgroundColor:"purple"}}>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}


/*
Note by that this footer component is also imported within the root component

*/
