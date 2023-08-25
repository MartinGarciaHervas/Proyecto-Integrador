import { useState } from "react";
import validar from "../../../helpers/validation";

import './Form.css'

function Form ({login}){

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email:"El nombre de usuario no puede estar vacio",
        password:"La contraseña debe tener al menos 1 numero y entre 6 y 10 caracteres",
    })

    function handleChange (event) {
        setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })

    setErrors(validar({
        ...userData,
        [event.target.name] : event.target.value
    }))
    }

    function handleSubmit(event){
        event.preventDefault();
        login(userData);
    }


    return (
        <div class="form">
            <form onSubmit={handleSubmit} >
                <br/>
                <label>Email</label>
                <input type="text" onChange={handleChange} name='email' placeholder="name@example.com" ></input>
                <br/>
                <span>{errors.email}</span>
                <br/>
                <label>Password</label>
                <input type="password" onChange={handleChange} name='password' placeholder="password" ></input>
                <br/>
                <span>{errors.password}</span>
                <br/>
                {errors.email || errors.password || !userData.email ? (<button type="submit" disabled>Log in</button>) : (<button type="submit" >Log in</button>)}
            </form>
        </div>
    )
}

export default Form;