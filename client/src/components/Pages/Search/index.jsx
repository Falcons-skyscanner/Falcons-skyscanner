import React from 'react'
import TicketComponent from './TicketComponent'
import SearchComponent from '../../Pages/Home/SearchComponent'

import './Search.css'

const SearchPage = ({flightsData , getFlightsData}) => {
    console.log(flightsData)
    const Carriers = flightsData.Carriers
    const Places = flightsData.Places
    const toggle = true
    return(
        <div className='searchpage'>
            <SearchComponent toggle={toggle} getFlightsData={getFlightsData}/>
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