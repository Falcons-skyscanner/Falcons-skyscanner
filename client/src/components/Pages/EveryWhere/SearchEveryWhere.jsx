import React from 'react'
import TicketComponent from '../Search/TicketComponent'
import Asynchronous from '../../SharedComponents/Material-UI/autoComplete'
import Button from '@material-ui/core/Button';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      originplace: "",
      flightsData: []
    }
  }


  postReq = (obj) => {
    fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${obj.originplace}/anywhere/anytime/anytime/`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "df421e16a0msh56c7f5a0b77c14bp1128c1jsn3a5e2f818ea5",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    })
      .then(response => response.json()
      )
      .then((data) => {
        this.setState({flightsData: data})
      })
      .catch(err => {
        console.error(err);
      });
  }

  setOrigin = async (plcaeId) => {
    await this.setState({ originplace: `${plcaeId}-sky` })
  }


  render() {
    const {flightsData } = this.state
    return (
      <div className='searchpage'>
        <div className='searchEveryTicket'>
          <Asynchronous fieldName="Where are you" setOrigin={this.setOrigin} />
          <Button onClick={() => this.postReq(this.state)} style={{ marginLeft: "8px", marginTop:"10px" }} color="primary" variant="contained" size="large">search everywhere anytime</Button>
        </div>
        {
          flightsData.Quotes ?
            flightsData.Quotes.map((flight, id) => {
              return <TicketComponent key={id} flight={flight} Carriers={flightsData.Carriers} Places={flightsData.Places} userId={this.props.userId} />
            }) : <div><h3>Look for flights to anywhere at anytime</h3></div>
        }
      </div>
    )
  }
}


export default SearchComponent
