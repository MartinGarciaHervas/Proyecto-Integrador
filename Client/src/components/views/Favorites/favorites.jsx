import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../Cards/Cards'
import { filterCards, orderCards } from '../../../redux/actions/actions';
import { useState } from 'react';
import style from './favorites.module.css'


function Favorites() {

    const [aux, setAux] = useState(false)

    const myFavorites = useSelector(state => state.myFavorites);
    // const allFavorites = useSelector(state => state.allFavorites);
    const dispatch = useDispatch();

    function orderHandler(event) {
        dispatch(orderCards(event.target.value));
        setAux(aux ? false : true);
    }

    function filterHandler(event) {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.filters}>
                    <h1 className={style.text}>Filters</h1>
                    <div className={style.filtros}>
                        <select className={style.select} onChange={orderHandler} >
                            <option value='' selected>Order</option>
                            <option value={'A'} >Ascendente</option>
                            <option value={'D'} >Descendente</option>
                        </select>
                        <br></br>
                        <select className={style.select} onChange={filterHandler} >
                            <option value={'All'} selected>Gender</option>
                            <option value={'Male'} >Male</option>
                            <option value={'Female'} >Female</option>
                            <option value={'Genderless'} >Genderless</option>
                            <option value={'unknown'} >Unknown</option>
                        </select>
                    </div>
                </div>
                <div></div>
                <Cards characters={myFavorites} />
            </div>
        </div>
    )

}

export default Favorites