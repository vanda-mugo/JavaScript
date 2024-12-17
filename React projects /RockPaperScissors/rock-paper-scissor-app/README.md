# Styling Rock, Paper, Scissors

In this project, you will get the chance to practice styling React applications using different techniques.

You will be styling a game of Rock, Paper, Scissors. However, rather than sticking to one technique, you will be asked to modify its appearance using inline styling syntax, object variable syntax, and, finally, CSS modules!

## Project Overview

This React project highlights the importance of styling and showcases different approaches to styling in React. You will explore and implement three primary styling methods:
1. **Inline Styling**
2. **Object Variable Styling**
3. **CSS Modules**

Throughout the project, you’ll be able to explore the advantages and disadvantages of each approach and practice React naming conventions for style properties.

By the end of this practice project, you will have improved your skills in styling React applications using various techniques and gained a deeper understanding of the different approaches. You will be able to apply your learnings to future React projects and improve your coding skills!

## Project Structure

```bash 
rock-paper-scissors/ ├── public/ │ └── index.html├── src/ │ ├── components/ │ │ └── Game.jsx│ ├── styles/ │ │ └── Game.module.css│ ├── App.jsx│ ├──index.js├── package.json├── README.md└── .gitignore
```
## Styling Techniques

### Inline Styling 
Inline styling is defined directly within the JSX using JavaScript objects.

 ```javascript 
 <h1 style={{ fontSize: '48px', marginTop: '0' }}>Rock Paper Scissors</h1>
 ```

## Object Variable Styling 
Styles are defined as JavaScript objects and applied to elements.

```javascript 
const resultStyle = {
  marginTop: '40px',
  fontSize: '48px',
  color: '#ffffff',
};

<h2 style={resultStyle}>{result}</h2>
```

## CSS Modules 
CSS Modules allow you to create styles scoped locally by default.

### Game.modules.css
```Css
.myDiv {
  color: blue;
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
}
```

### Game.jsx
```javascript 
import React from 'react';
import styles from './Game.module.css';

<div className={styles.myDiv}>
  This div is styled using CSS modules!
</div>
```

## To run this project on your own 
### Clone this repository

```bash 
clone the project from the repository, 
cd rock-paper-scissors
```

### Install dependencies 
within the project directory after cloning install the required repositories 
```bash 
npm install 
```
### Start the development server 

```bash
npm run dev
```