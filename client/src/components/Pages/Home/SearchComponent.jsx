import React from 'react';
import { Link } from 'react-router-dom'
import OpenSelect from '../../SharedComponents/Material-UI/OpenSelect'
import DatePicker from '../../SharedComponents/Material-UI/DatePicker'
import Asynchronous from '../../SharedComponents/Material-UI/autoComplete'
import Button from '@material-ui/core/Button';
import SimpleSlider from '../../SharedComponents/Material-UI/SimpleSlider'
import './Home.css'


class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            originplace: "",
            destinationplace: "",
            outboundpartialdate: "",
            inboundpartialdate: "",
        }
    }

    setOrigin = async (plcaeId) => {
        await this.setState({ originplace: `${plcaeId}-sky` })
        console.log("1")
    }
    setDest = async (plcaeId) => {
        await this.setState({ destinationplace: `${plcaeId}-sky` })
    }
    setOutDate = async (date) => {
        await this.setState({ outboundpartialdate: date })
    }
    setInDate = async (date) => {
        await this.setState({ inboundpartialdate: date })
        console.log(this.state)
    }

    postReq = (obj) => {
        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${obj.originplace}/${obj.destinationplace}/${obj.outboundpartialdate}?inboundpartialdate=${obj.inboundpartialdate}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "df421e16a0msh56c7f5a0b77c14bp1128c1jsn3a5e2f818ea5",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json()
            )
            .then((data) => {
                // console.log(data)
                this.props.getFlightsData(data)
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {

        return (
            <div>
                <SimpleSlider />

                <div className="searchBox">
                    <Asynchronous fieldName="From" setOrigin={this.setOrigin} />
                    <Asynchronous fieldName="To" setDest={this.setDest} />
                    <DatePicker bound="Depart" setOutDate={this.setOutDate} />
                    <DatePicker bound="Return" setInDate={this.setInDate} />
                    <OpenSelect />
                    <Link to="/search">
                        <Button onClick={() => this.postReq(this.state)} style={{ marginLeft: "8px" }} color="secondary" variant="contained" size="large">search</Button>
                    </Link>
                </div>

            </div>
        );
    }
}
export default SearchComponent
