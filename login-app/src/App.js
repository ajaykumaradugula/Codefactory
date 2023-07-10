// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from 'react-dom/client';
import { Login } from "./Login";
import { Register } from "./Register";


function App() {
  const [currerntForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    
      setCurrentForm(formName);
    
  }

	return(
    <div className="App">
      {
        currerntForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  )
}

export default App;
