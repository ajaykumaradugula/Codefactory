import React,{ useState } from "react";
import axios from 'axios';

export const Register = (props) =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobileno, setMobile] = useState('');
    const [gender, setCategory] = React.useState('Male');

    const handleGenderChange = (category) => {
      setCategory(category);
         console.log(category);
    }

    const handleSubmit = (e) => {
        debugger;
        try{          
            let item = {name:name, password:pass, email:email, lastname:"Doe", mobileno:mobileno, gender:gender};
            axios
            .post("http://localhost:8000/api/userlists/", item);
    
        } catch(e){
            console.log(e)
        }
    }

    return(
        <div className="main-form">
        <form className="reg-form" onSubmit={ (e) => handleSubmit(e)}>
            <label htmlFor="name">name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="enter your name" id="name" name="name"></input>

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" id="email" name="email"></input>

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"></input>

            <label htmlFor="mobileno">mobileno</label>
            <input value={mobileno} onChange={(e) => setMobile(e.target.value)} type="mobileno"  id="mobileno" name="mobileno"></input>

            <label htmlFor="gender">gender</label>
            <select value={gender} onChange={event => handleGenderChange(event.target.value)} type="gender"  id="gender" name="gender">
            <option id="0" >Male</option>
            <option id="1" >Female</option>
            </select>

            <button type="submit">Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account ? Login Here</button>
        </div>
    )
}