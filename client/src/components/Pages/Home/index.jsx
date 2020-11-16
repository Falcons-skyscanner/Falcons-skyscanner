import React from 'react'
import SearchComponent from './SearchComponent'
import EveryWhere from './EverywhereComponent'

const HomePage = ({getFlightsData}) => (
    <div>
        <SearchComponent getFlightsData={getFlightsData}/>
        <EveryWhere />
    </div>
)


export default HomePage