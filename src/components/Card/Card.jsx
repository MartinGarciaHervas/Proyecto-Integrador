import { NavLink } from "react-router-dom";
import style from './card.module.css';
import { addFav, removeFav } from '../../redux/actions/actions'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      }
      if (!isFav) {
         setIsFav(true);
         addFav(props)
      }
   }

   useEffect(() => {
      (props.myFavorites).forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const { id, name, status, gender, image, onClose, addFav, removeFav} = props;


   return (
      <div className={style.card} >
         <button onClick={() => onClose(id)}>X</button>
         <h3>{name}</h3>
         <h4>Status: {status}</h4>
         <h4>Gender: {gender}</h4>
         <NavLink to={`/detail/${id}`} ><img src={image} alt={name} /></NavLink>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
         }
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: (personaje) => {
         dispatch(addFav(personaje))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);