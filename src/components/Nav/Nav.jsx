import SearchBar from '../SearchBar/SearchBar.jsx';
import {NavLink} from 'react-router-dom';

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} />
            <button onClick={props.random}>RANDOM</button>
            <NavLink to='/about'><button>About</button></NavLink>
            <NavLink to='/'><button>Home</button></NavLink>
        </div>
    )
}