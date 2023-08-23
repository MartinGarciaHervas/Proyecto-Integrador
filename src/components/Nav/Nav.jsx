import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} />
            <button onClick={props.random}>RANDOM</button>
        </div>
    )
}