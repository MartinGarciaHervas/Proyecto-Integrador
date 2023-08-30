import { useState } from "react";
import validar from "../../../helpers/validation";

import style from './Form.module.css'

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
        <div className={style.background}>
            <h1 className={style.titulo} >Rick and Morty</h1>
            <h1 className={style.titulo1} >Rick and Morty</h1>
            <form className={style.container} onSubmit={handleSubmit} >
                <br/>
                <label className={style.label}>Email</label>
                <input className={style.input} type="text" onChange={handleChange} name='email' placeholder="name@example.com" ></input>
                <br/>
                <span className={style.errores} >{errors.email}</span>
                <br/>
                <label className={style.label}>Password</label>
                <input className={style.input} type="password" onChange={handleChange} name='password' placeholder="password" ></input>
                <br/>
                <span className={style.errores} >{errors.password}</span>
                <br/>
                {errors.email || errors.password || !userData.email ? (<button className={style.loginButton} type="submit" disabled>Log in</button>) : (<button className={style.loginButton} type="submit" >Log in</button>)}
            </form>
        </div>
    )
}

export default Form;