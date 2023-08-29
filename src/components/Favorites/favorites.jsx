import { connect } from 'react-redux'
import Card from '../Card/Card'


function Favorites(props){
console.log(props);
return(
    <div>
        {(props.myFavorites).map(fav=><Card name={fav.name}
               id={fav.id}
               key={fav.id}
               status={fav.status}
               species={fav.species}
               gender={fav.gender}
               origin={fav.origin?.name}
               image={fav.image} ></Card>)}
    </div>
)

}

function mapStateProps (state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateProps)(Favorites)