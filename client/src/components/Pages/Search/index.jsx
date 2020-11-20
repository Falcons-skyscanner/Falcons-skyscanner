import React from 'react'
import TicketComponent from './TicketComponent'
import SearchComponent from '../../Pages/Home/SearchComponent'
import './Search.css'

const SearchPage = ({flightsData , getFlightsData , userId}) => {
    console.log(flightsData)
    const Carriers = flightsData.Carriers
    const Places = flightsData.Places
    const toggle = true
    return(
        <div className='searchpage'>
            <SearchComponent toggle={toggle} getFlightsData={getFlightsData}/>
            {
                flightsData.Quotes && flightsData.Quotes.length>0 ?
                flightsData.Quotes.map(( flight,id ) => {
                    return <TicketComponent key={id} flight={flight} Carriers={Carriers} Places={Places} userId={userId} />
                }):
                flightsData.Quotes && flightsData.Quotes.length===0 ?
                <div><h3>Ooops! ... No flights!</h3></div>
                :<div><h3>Looking for flights ?</h3></div>
            }
        </div>
    )

}


export default SearchPage