import Card from '../Card/Card';
import style from './cards.modules.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.cards} >
         {characters.map(character =>
            <Card
               name={character.name}
               id={character.id}
               key={character.id}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
         )}
      </div>
   );
}
