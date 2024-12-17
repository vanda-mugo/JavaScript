import React, { useState } from "react";
import styles from "./Game.module.css";

const choiceStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "40px",
};

const emojiStyles = {
  fontSize: "64px",
  marginRight: "20px",
};

const nameStyles = {
  margin: "0px",
  fontSize: "24px",
  color: "#ffffff", // Corrected color value
};

const resultStyle = {
  marginTop: "40px",
  fontSize: "48px",
  color: "#ffffff", // Corrected color value
};

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1> {/* Corrected camelCase property */}
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
            className={styles.button}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <button className={styles.button} onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
