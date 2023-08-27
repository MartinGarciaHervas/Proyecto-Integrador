import { NavLink } from "react-router-dom";
import style from './card.module.css'

function Card(props) {
   const { id, name, status, gender, image, onClose } = props;
   return (
      <div className={style.card} >
         <button onClick={() => onClose(id)}>X</button>
         <h3>{name}</h3>
         <h4>Status: {status}</h4>
         <h4>Gender: {gender}</h4>
         <NavLink to={`/detail/${id}`} ><img src={image} alt={name} /></NavLink>
      </div>
   );
}

export default Card;