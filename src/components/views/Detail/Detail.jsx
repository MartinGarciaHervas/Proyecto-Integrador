import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './detail.module.css'

function Detail() {
    const { id } = useParams()

    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);



    return (
        <div>
            {character?.id === 1 ?
                <div className={style.rick} >
                    <div className={style.detail1}>
                        <div>
                        <h2>{character?.name}</h2>
                        <h2>Status: {character?.status}</h2>
                        <h2>Species: {character?.species}</h2>
                        <h2>Gender: {character?.gender}</h2>
                        <h2>Origin: {character?.origin?.name}</h2>
                        </div>
                    </div>
                </div>
                :
                <div className={style.background} >
                    <div className={style.detail} >
                        <img className={style.image} src={character?.image} alt="imagen"></img>
                        <h2>{character?.name}</h2>
                        <h2>Status: {character?.status}</h2>
                        <h2>Species: {character?.species}</h2>
                        <h2>Gender: {character?.gender}</h2>
                        <h2>Origin: {character?.origin?.name}</h2>
                    </div>
                </div>}
        </div>
    )
}

export default Detail;