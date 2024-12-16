# React Project: Presentation and Container Components

This project is a simple React application that demonstrates the concept of separating presentation and container (stateful) components. The goal is to create a clear distinction between components responsible for how things look (presentation components) and how things work (container components).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Presentation Components](#presentation-components)
  - [Container Components](#container-components)

## Introduction

In React applications, it's a best practice to separate components into presentation and container components. This separation helps to maintain a clean, modular, and maintainable codebase.

- **Presentation Components**: These components are concerned with how things look. They receive data and callbacks exclusively via props and don't handle state or side effects.
- **Container Components**: These components are concerned with how things work. They manage state, side effects, and data fetching, and pass data and callbacks to presentation components.

## Features

- Demonstrates the separation of presentation and container components.
- Simple example of a user profile display.
- Uses React hooks for state management and effects.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/react-presentation-container-example.git
cd react-presentation-container-example
npm install
```

## Start the development server, run

```bash 
npm run dev
```

open browser and navigate to http://localhost:3000

## Project Structure 

```bash 
react-presentation-container-example/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserCard.jsx
│   │   └── UserProfileContainer.jsx
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## Presentation Components 

```javascript 
import React from 'react';

const UserCard = ({ name, age, onClick }) => (
  <div onClick={onClick}>
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);

export default UserCard;
```

## Container Components 

```javascript 
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const UserProfileContainer = () => {
  const [user, setUser] = useState({ name: '', age: 0 });

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setUser({ name: 'Alice', age: 25 });
    }, 1000);
  }, []);

  const handleClick = () => {
    alert(`User: ${user.name}`);
  };

  return <UserCard name={user.name} age={user.age} onClick={handleClick} />;
};

export default UserProfileContainer;
```

