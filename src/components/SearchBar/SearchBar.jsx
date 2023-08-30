import { useState } from 'react';
import style from './searchBar.module.css'
import { useDispatch } from 'react-redux';
import { addCharacter } from '../../redux/actions/actions';


export default function SearchBar(props) {

   const dispatch = useDispatch();

   const [id, setId] = useState("");

   const changeHandler = (event) => {setId(event.target.value)}

   let clickHandler = () => {
      dispatch(addCharacter(id));
      setId('')
   }

   return (
      <div className={style.searchBar} >
         <input type='search' value={id} onChange={changeHandler} placeholder='Search ID'/>
         <button onClick={clickHandler}>Agregar</button>
      </div>
   );
}
