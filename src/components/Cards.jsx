import Card from './Card';

export default function Cards({ characters, onClose }) {
   console.log(characters)
   return (
      <div>
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
