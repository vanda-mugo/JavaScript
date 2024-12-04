# Piano Key Project

## Overview
This project showcases an interactive piano interface using HTML, CSS, and JavaScript. The project includes various functionalities such as changing key colors on mouse events and progressing through lyrics of a song.

## Features
- Interactive piano keys that change color when pressed.
- Step-by-step progression through song lyrics.
- Buttons to navigate through different lines of lyrics.

## JavaScript Details

### Piano Key Interaction
The piano keys change color when pressed (`mousedown`) and revert when released (`mouseup`).

#### Code Snippet
```javascript
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
});

function keyPlay(event){
  event.target.style.backgroundColor = 'green';
}

const keyReturn = (event) => {
  event.target.style.backgroundColor = '';
};

const eventHandler = (note) => {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
};

notes.forEach(item => eventHandler(item));
