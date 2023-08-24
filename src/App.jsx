import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About.jsx'
import Detail from './views/Detail.jsx';
import Error from './views/Error/ErrorPage.jsx';
import Form from './views/Form.jsx';

import './App.css';



function App() {

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

   const EMAIL = "martinghervas@hotmail.com";
   const PASSWORD = "powerfc1";

   function login(userData){
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   }

   function logOut(){
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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

   const location = useLocation()

   return (
      <div className='App'>
         {location.pathname !== "/" ? (<Nav onSearch={searchHandler} random={randomHandler} logOut={logOut} />) : null}
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
