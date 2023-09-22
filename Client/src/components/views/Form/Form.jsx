import { useEffect, useState } from "react";
import validar from "../../../helpers/validation";
import Register from "../../Register/Register";

import style from './Form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/actions"
import { useNavigate } from "react-router-dom";

function Form() {

    const dispatch = useDispatch();
    const access = useSelector(state => state.access)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "El nombre de usuario no puede estar vacio",
        password: "La contraseña debe tener al menos 1 numero y entre 6 y 10 caracteres",
    })

    const [register, setRegister] = useState(false);


    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validar({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }


    useEffect(() => {
        access && navigate('/home');
    }, [access])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(userData));
    }

    function registerHandler() {
        setRegister(true)
    }


    return (
        <div className={style.background}>
            <div className={style.portal}>
                <h1 className={style.titulo} >Rick and Morty</h1>
                <h1 className={style.titulo1} >Rick and Morty</h1>
                {!register ? (
                    <form className={style.container} onSubmit={handleSubmit} >
                        <br />
                        <div className={style.email}>
                            <div className={style.persona}><span className="material-symbols-rounded">person</span></div>
                            <input className={style.input} type="text" onChange={handleChange} name='email' placeholder="  Email ID" ></input>
                        </div>
                        <br />
                        <div className={style.span}>
                            <span className={style.errores} >{errors.email}</span>
                        </div>
                        <br />
                        <div className={style.password}>
                            <div className={style.lock}><span className="material-symbols-rounded">vpn_key</span></div>
                            <input className={style.input} type="password" onChange={handleChange} name='password' placeholder="  Password" ></input>
                        </div>
                        <br />
                        <div className={style.span}>
                            <span className={style.errores} >{errors.password}</span>
                        </div>
                        <br />
                        {errors.email || errors.password || !userData.email ? (<button className={style.loginButton} type="submit" disabled><span className="material-symbols-rounded">login</span></button>) : (<button className={style.loginButtonEnabled} type="submit" ><span className="material-symbols-rounded">login</span></button>)}
                        <br />
                        <button className={style.loginButton} onClick={registerHandler}>Register</button>
                    </form>
                ) : (
                    <Register />
                )}
            </div>
        </div>
    )
}

export default Form;