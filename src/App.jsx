import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './views/About.jsx'
import Detail from './views/Detail.jsx';

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
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
         
      </div>
   );
}

export default App;
