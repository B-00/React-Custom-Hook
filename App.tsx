import React from 'react';
import './App.css';
import useId from './useId'

function App() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react"/>
      <p>{id}</p>
    </>
  );
}

export default App;
