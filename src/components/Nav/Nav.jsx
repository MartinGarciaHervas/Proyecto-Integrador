import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'
import { useDispatch } from 'react-redux';
import { addRandomCharacter } from '../../redux/actions/actions.js';

export default function Nav(props) {

    const dispatch = useDispatch();

    const randomHandler = () =>{
        dispatch(addRandomCharacter())
    }

    return (
        <div>
            <div className={style.Nav} >
                <NavLink to='/about'><button>About</button></NavLink>
                <NavLink to='/home'><button>Home</button></NavLink> 
                <NavLink to='/favorites'><button>Favorites</button></NavLink>              
                <NavLink to='/'><button onClick={props.logOut} >Log Out</button></NavLink>            
            </div>
            <SearchBar />
            <div>
            <button onClick={randomHandler}>RANDOM</button>
            </div>
        </div>
    )
}