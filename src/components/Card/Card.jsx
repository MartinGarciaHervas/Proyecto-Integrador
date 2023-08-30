import { NavLink, useLocation } from "react-router-dom";
import style from './card.module.css';
import { addFav, removeCharacter, removeFav } from '../../redux/actions/actions'
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'

function Card(props) {

   const [isFav, setIsFav] = useState(false);
   
   const { id, name, status, gender, image} = props;

   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();

   const location = useLocation();
   
   function favoriteHandler() {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id))
      }
      if (!isFav) {
         setIsFav(true);
         dispatch(addFav(props))
      }
   }

   useEffect(() => {
      (myFavorites).forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const closeHandler = () =>{
      dispatch(removeCharacter(id))
   }



   return (
      <div className={style.card} >
         {location.pathname !== '/favorites' && <button onClick={closeHandler}>X</button>}
         <h3>{name}</h3>
         <h4>Status: {status}</h4>
         <h4>Gender: {gender}</h4>
         <NavLink to={`/detail/${id}`} ><img src={image} alt={name} /></NavLink>
         {isFav ? (<button onClick={favoriteHandler}>❤️</button>) : (<button onClick={favoriteHandler}>🤍</button>)
      }
      </div>
   );
}

// function mapDispatchToProps(dispatch) {
//    return {
//       addFav: (personaje) => {
//          dispatch(addFav(personaje))
//       },
//       removeFav: (id) => {
//          dispatch(removeFav(id))
//       }
//    }
// }

// function mapStateToProps(state) {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);

export default Card;