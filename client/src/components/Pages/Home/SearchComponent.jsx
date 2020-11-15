import React from 'react';
import SimpleSlider from '../../SharedComponents/SimpleSlider';
import Asynchronous from '../../SharedComponents/AutoComplete'

import './Home.css'



const SearchComponent = () => {
    return(
        <div className='search'>
            <div className='search__form'>
                <Asynchronous />
                <Asynchronous />
            </div>
            
            <SimpleSlider/>
        </div>
    )
}


export default SearchComponent