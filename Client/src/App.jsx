import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/views/About/About.jsx';
import Detail from './components/views/Detail/Detail.jsx';
import Error from './components/views/Error/ErrorPage.jsx';
import Form from './components/views/Form/Form.jsx';
import Favorites from './components/views/Favorites/favorites.jsx';

import style from './App.module.css';

//https://rym2-production.up.railway.app/api/character/${id}?key=henrym-MartinGarciaHervas


function App() {

   const navigate = useNavigate();
   const characters = useSelector(state => state.characters)
   const location = useLocation()
   const access = useSelector(state => state.access)

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className={style.App}>
         {location.pathname !== "/" ? (<Nav />) : null}

         <Routes>
            <Route path='/home' element={<Cards characters={characters} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/' element={<Form />} />
            <Route path='*' element={<Error />} />
         </Routes>

      </div>
   );
}

export default App;
