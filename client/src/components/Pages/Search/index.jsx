import React from 'react'
import TicketComponent from './TicketComponent'
import SearchComponent from '../../Pages/Home/SearchComponent'

import './Search.css'

const SearchPage = ({flightsData}) => {
    console.log(flightsData)
    const Carriers = flightsData.Carriers
    const Places = flightsData.Places
    return(
        <div className='searchpage'>
            {/* <SearchComponent/> */}
            {/* <h1> Search Page</h1> */}
            {
                flightsData.Quotes?
                flightsData.Quotes.map(( flight,id ) => {
                    return <TicketComponent key={id} flight={flight} Carriers={Carriers} Places={Places} />
                }):<div></div>
            }
            
        </div>
    )

}


export default SearchPage