import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

import './App.css';



function App() {
   
   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });};

   function onClose(id) {
      let data = parseInt(id)

      setCharacters(characters.filter(character => character.id !== data))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
