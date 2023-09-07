// import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './detail.module.css'
import { characterDetail, detailClear } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const [detail] = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(characterDetail(id));
    }, []);

    return (
        <div>
            {detail?.id === 1 ?
                <div className={style.rick} >
                    <div className={style.detail1}>
                        <div>
                        <h2>{detail?.name}</h2>
                        <h2>Status: {detail?.status}</h2>
                        <h2>Species: {detail?.species}</h2>
                        <h2>Gender: {detail?.gender}</h2>
                        <h2>Origin: {detail?.origin?.name}</h2>
                        </div>
                    </div>
                </div>
                :
                <div className={style.background} >
                    <div className={style.detail} >
                        <img className={style.image} src={detail?.image} alt="imagen"></img>
                        <h2>{detail?.name}</h2>
                        <h2>Status: {detail?.status}</h2>
                        <h2>Species: {detail?.species}</h2>
                        <h2>Gender: {detail?.gender}</h2>
                        <h2>Origin: {detail?.origin?.name}</h2>
                    </div>
                </div>}
        </div>
    )
}

export default Detail;