import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'
import { useDispatch } from 'react-redux';
import { addRandomCharacter } from '../../redux/actions/actions.js';

export default function Nav(props) {

    const dispatch = useDispatch();

    const randomHandler = () => {
        dispatch(addRandomCharacter())
    }

    return (
        <div>
            <div className={style.nav} >
                <div className={style.botonesIndex} >
                    <NavLink to='/home'><button className={style.buttons} ><span className="material-symbols-rounded">home</span></button></NavLink>
                    <NavLink to='/favorites'><button className={style.buttons} ><span className="material-symbols-rounded">favorite</span></button></NavLink>
                    <NavLink to='/about'><button className={style.buttons} ><span className={style.about} >ABOUT</span></button></NavLink>
                </div>
                <div className={style.searchBar} >
                    <SearchBar />
                    <button className={style.random} onClick={randomHandler}>ADD RANDOM</button>
                </div>
                <div className={style.botonesIndex} >
                    <NavLink to='/'><button className={style.logOut} onClick={props.logOut} ><span className="material-symbols-rounded">logout</span></button></NavLink>
                </div>
            </div>
        </div>
    )
}