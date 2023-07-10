import React,{ useState } from "react";
import axios from 'axios'; 

export const Login = (props) =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        debugger;
        try{          
            let item = {name:"John", password:"1234", email:"John@gmail.com", lastname:"Doe"};
            axios
            .post("http://localhost:8000/api/userlists/", item);
    
        } catch(e){
            console.log(e)
        }
    }

    return(
  
        <div className="main-form">
        <form className="login-form" onSubmit={ (e) => handleSubmit(e)}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" id="email" name="email"></input>

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"></input>

            <button type="submit">SignIn</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register Here</button>
        </div>
        
    )
}