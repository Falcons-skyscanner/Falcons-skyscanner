import React from 'react';
import OpenSelect from '../../SharedComponents/OpenSelect'
import DatePicker from '../../SharedComponents/DatePicker'
import Asynchronous from '../../SharedComponents/autoComplete'
import './Home.css'


class SearchComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            originplace: "",
            destinationplace: "",
            outboundpartialdate: "",
            inboundpartialdate: ""
        }
    }
    render() {

        return (
            <div className="searchBox">
                <Asynchronous fieldName="From"/>
                <Asynchronous fieldName="To"/>
                <DatePicker bound="Depart" />
                <DatePicker bound="Return" />
                <OpenSelect />
            </div>
        );
    }
}
export default SearchComponent
