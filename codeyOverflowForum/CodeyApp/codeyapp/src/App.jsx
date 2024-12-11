import React from "react";
import { comments } from "./commentData";
import Card from "./Card";
import Button from "./Button";


function App() {
  return (
    <div>
    {
        comments.map((comment) => (
         <Card commentObject = {comment} />
        ))
    }
    <Button  fact="Dinasoars are quite cool creatures, however extinct." 
    src="https://scitechdaily.com/images/Tyrannosaurus-T-Rex-Dinosaur.jpg"/>
    </div>
  );
}

export default App;
