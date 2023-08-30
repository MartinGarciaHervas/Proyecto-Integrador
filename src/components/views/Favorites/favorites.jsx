import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../Cards/Cards'
import { filterCards, orderCards } from '../../../redux/actions/actions';
import { useState } from 'react';


function Favorites(){

const [aux, setAux] = useState(false)

const myFavorites = useSelector(state => state.myFavorites);
// const allFavorites = useSelector(state => state.allFavorites);
const dispatch = useDispatch();

function orderHandler(event){
    dispatch(orderCards(event.target.value));
    setAux(aux? false : true);
}

function filterHandler(event){
    dispatch(filterCards(event.target.value));
}

return(
    <div>
        <select onChange={orderHandler} >
            <option value={'A'} >Ascendente</option>
            <option value={'D'} >Descendente</option>
        </select>
        <select onChange={filterHandler} >
            <option value={'All'} >All</option>
            <option value={'Male'} >Male</option>
            <option value={'Female'} >Female</option>
            <option value={'Genderless'} >Genderless</option>
            <option value={'unknown'} >Unknown</option>
        </select>
        <Cards characters={myFavorites} />
    </div>
)

}

export default Favorites