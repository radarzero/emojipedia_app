import './App.css';
import React from "react";
import Login from "./Login";

function App(props:any) {
  return (
    <div className="container">
      <Login varry={props.varry}/>
    </div>
  );
}

export default App;
