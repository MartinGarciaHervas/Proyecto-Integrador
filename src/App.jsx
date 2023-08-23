import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

import './App.css';



function App() {

   const [characters, setCharacters] = useState([]);

   //https://rym2-production.up.railway.app/api/character/${id}?key=henrym-MartinGarciaHervas

   function searchHandler(id) {
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

   function closeHandler(id) {
      let data = parseInt(id)

      setCharacters(characters.filter(character => character.id !== data))
   }

   function randomHandler() {
      let randomId = parseInt((Math.random() * 826).toFixed())
      searchHandler(randomId);
   }

   return (
      <div className='App'>
         <Nav onSearch={searchHandler} random={randomHandler} />
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;
