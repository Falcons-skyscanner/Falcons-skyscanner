import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const EveryWhere = ({ suggest }) => {

    return (
        <div className='container'>
            <Link to='searcheverywhere' style={{textDecoration:"none"}}>
            <img className='suggested__img' src={ suggest.imgUrl} alt="rome" />
            </Link>
            <div className='suggested__title'>
                <h2> {suggest.name}  </h2>
            </div>
        </div>
    )
}


export default EveryWhere