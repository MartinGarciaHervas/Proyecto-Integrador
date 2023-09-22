import { useDispatch } from "react-redux";
import { useState } from "react";
import validar from "../../helpers/validation";
import style from './Register.module.css'
import { login } from "../../redux/actions/actions";

import axios from "axios";


function Register() {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({
        email: "El nombre de usuario no puede estar vacio",
        password: "La contraseña debe tener al menos 1 numero y entre 6 y 10 caracteres",
    })

    const [registerData, setRegisterData] = useState({
        email: '',
        password: ''
    })

    function registerChangeHandler(event) {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        });

        setErrors(validar({
            ...registerData,
            [event.target.name]: event.target.value
        }))
    }

    const registerSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:3001/rickandmorty/login', registerData);
            alert(data);
            dispatch(login(registerData));
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <form className={style.container} onSubmit={registerSubmitHandler} >
            <h1 className={style.h1}>Register</h1>
            <br />
            <div className={style.email}>
                <div className={style.persona}><span className="material-symbols-rounded">person</span></div>
                <input className={style.input} type="text" onChange={registerChangeHandler} name='email' placeholder="  Email ID" ></input>
            </div>
            <br />
            <div className={style.span}>
                <span className={style.errores} >{errors.email}</span>
            </div>
            <br />
            <div className={style.password}>
                <div className={style.lock}><span className="material-symbols-rounded">vpn_key</span></div>
                <input className={style.input} type="password" onChange={registerChangeHandler} name='password' placeholder="  Password" ></input>
            </div>
            <br />
            <div className={style.span}>
                <span className={style.errores} >{errors.password}</span>
            </div>
            <br />
            {errors.email || errors.password ? (<button className={style.loginButton} type="submit" disabled>Register</button>) : (<button className={style.loginButtonEnabled} type="submit" >Register</button>)}
        </form>
    )
};

export default Register;