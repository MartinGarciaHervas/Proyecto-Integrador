import { connect } from 'react-redux'
import Cards from '../../Cards/Cards'


function Favorites(props){
console.log(props);
return(
    <div>
        <Cards characters={props.myFavorites} />
    </div>
)

}

function mapStateProps (state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateProps)(Favorites)