import { useState } from 'react';
import style from './searchBar.module.css'
import { useDispatch } from 'react-redux';
import { addCharacter, clearCharacters } from '../../redux/actions/actions';


export default function SearchBar() {

   const dispatch = useDispatch();

   const [id, setId] = useState("");

   const changeHandler = (event) => {setId(event.target.value)}

   let clickHandler = () => {
      dispatch(addCharacter(id));
      setId('')
   }

   const clearHandler = () => {
      dispatch(clearCharacters())
   }

   return (
      <div className={style.searchBar} >
         <input className={style.input} type='search' value={id} onChange={changeHandler} placeholder='Search ID'/>
         <button className={style.button} onClick={clickHandler}>ADD</button>
         <button className={style.button} onClick={clearHandler}>CLEAR</button>
      </div>
   );
}
