import { NavLink, useLocation } from "react-router-dom";
import style from './card.module.css';
import { addFav, removeCharacter, removeFav } from '../../redux/actions/actions'
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'

function Card(props) {

   const [isFav, setIsFav] = useState(false);
   
   const { id, name, gender, image, species} = props;

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
         <div className={style.buttons}>
         {isFav ? (<button className={style.fav} onClick={favoriteHandler}><span className="material-symbols-rounded">favorite</span></button>) : (<button className={style.fav2} onClick={favoriteHandler}><span className="material-symbols-rounded">favorite</span></button>)}
         {location.pathname !== '/favorites' && <button className={style.close} onClick={closeHandler}>✖</button>}
         </div>
         <h2 className={style.name} >{name}</h2>
         <h4>Species: {species}</h4>
         <h4>Gender: {gender}</h4>
         <NavLink to={`/detail/${id}`} ><img className={style.image} src={image} alt={name} /></NavLink>
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