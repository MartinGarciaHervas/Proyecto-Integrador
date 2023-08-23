import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

import './App.css';



function App() {

   const [characters, setCharacters] = useState([]);

   //https://rym2-production.up.railway.app/api/character/${id}?key=henrym-MartinGarciaHervas

   function onSearch(id) {
      if(!characters.some(character => character.id===parseInt(id))){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   };

   function onClose(id) {
      let data = parseInt(id)

      setCharacters(characters.filter(character => character.id !== data))
   }

   function random() {
      let randomId = parseInt((Math.random() * 826).toFixed())
      onSearch(randomId);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} random={random} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
