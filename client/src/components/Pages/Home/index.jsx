import React from 'react'
import SearchComponent from './SearchComponent'
import EveryWhere from './EverywhereComponent'
import SimpleSlider from '../../SharedComponents/Material-UI/SimpleSlider'

const HomePage = ({getFlightsData}) => (
    <div>
        <SimpleSlider />
        <SearchComponent getFlightsData={getFlightsData}/>
        <EveryWhere />
    </div>
)



export default HomePage
