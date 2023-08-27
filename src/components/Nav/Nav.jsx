import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'

export default function Nav(props) {
    return (
        <div>
            <div className={style.Nav} >
                <NavLink to='/about'><button>About</button></NavLink>
                <NavLink to='/home'><button>Home</button></NavLink>               
                <NavLink className={style.logOut} to='/'><button onClick={props.logOut} >Log Out</button></NavLink>            
            </div>
            <SearchBar onSearch={props.onSearch} />
            <div className={style.random} >
            <button onClick={props.random}>RANDOM</button>
            </div>
        </div>
    )
}