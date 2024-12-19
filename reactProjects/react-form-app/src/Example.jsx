import React, { useState } from "react";

function Example() {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  return <input onChange={handleChange} type="text" />;
}
