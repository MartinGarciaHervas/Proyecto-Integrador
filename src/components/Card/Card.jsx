import { NavLink } from "react-router-dom";

function Card(props) {
   const {id, name, status, gender, image, onClose} = props;
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`} ><h2>Nombre: {name}</h2></NavLink>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

export default Card;