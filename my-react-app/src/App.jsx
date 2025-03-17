import React from "react";
import Scenario from "./components/scenario";
import './App.css'
import Login from './login';

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}
const App = () =>{
  const scenario = "You're stuck in a room with an angry llama. How do you escape?";
  const options = ["A) Try to reason with the llama.",
    "B) Dance like nobody's watching.",
    "C) Use your secret llama escape technique.",
    "D) Offer the llama a snack and hope for the best."];

    return(
      <div className="App">
        <h1>What Would You Do?</h1>
        <Scenario scenario={scenario} options={options}/>
      </div>
    )
}
export default App;
