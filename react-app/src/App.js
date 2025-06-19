// src/App.js
import React from 'react';
import Button from './components/Button';

function App() {
  const sayHi = () => alert("Hi there!");
  const sayBye = () => alert("Bye!");

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',     
        justifyContent: 'center',
        height: '100vh',          
        textAlign: 'center'       
      }}
    >
      <h1>Starr's First Reusable React Component</h1>
      <Button text="Click to Say Hi" onClick={sayHi} color="green" />
      <Button text="Click to Say Bye" onClick={sayBye} color="red" />
    </div>
  );
}

export default App;
