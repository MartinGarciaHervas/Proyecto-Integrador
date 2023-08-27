import { useState } from 'react';
import style from './searchBar.module.css'


export default function SearchBar(props) {

   const [id, setId] = useState("");

   const changeHandler = (event) => {setId(event.target.value)}
   let clickHandler = () => {
      props.onSearch(id);
      setId('')
   }

   return (
      <div className={style.searchBar} >
         <input type='search' value={id} onChange={changeHandler} placeholder='Search ID'/>
         <button onClick={clickHandler}>Agregar</button>
      </div>
   );
}
