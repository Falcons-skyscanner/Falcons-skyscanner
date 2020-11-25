import React from 'react'
import SelectDialog from './SelectDialog'
import MaxWidthDialog from '../../SharedComponents/Header/MaxWidthDialog'

const TicketComponent = ({ flight, Carriers, Places, userId }) => {
    const [success, setsuccess] = React.useState(true);
    const getName = (id, arr) => {
        let name = ''
        arr.forEach((el, i) => {
            if (el.CarrierId === id || el.PlaceId === id) {
                name = el.Name
            }
        })
        return name
    }

    const hashCode = function (string) {
        var hash = 0;
        if (string.length === 0) {
            return hash;
        }
        for (var i = 0; i < string.length; i++) {
            var char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    const valueTohash = flight.MinPrice + getName(flight.OutboundLeg.CarrierIds[0], Carriers) + getName(flight.OutboundLeg.OriginId, Places) + getName(flight.OutboundLeg.DestinationId, Places) + userId


    const userTicket = {
        userID: userId,
        flightNo: hashCode(valueTohash), // there is no unique flight num from api so we hashed ours
        price: flight.MinPrice,
        carrierOutboundLeg: getName(flight.OutboundLeg.CarrierIds[0], Carriers),
        originOutboundLeg: getName(flight.OutboundLeg.OriginId, Places),
        destinationOutboundLeg: getName(flight.OutboundLeg.DestinationId, Places),
        carrierInboundLeg: getName(flight.InboundLeg.CarrierIds[0], Carriers),
        originInboundLeg: getName(flight.InboundLeg.OriginId, Places),
        destinationInboundLeg: getName(flight.InboundLeg.DestinationId, Places),
        outboundDate: flight.OutboundLeg.DepartureDate.split('T')[0],
        inboundDate: flight.InboundLeg.DepartureDate.split('T')[0],
        sold : false
    }

    const addTicket = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'auth-sky': localStorage.getItem('auth-sky') },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/api/flights/addTicket', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(!data.success){
                    setsuccess(false)
                }else setsuccess(true)
            })
    }

    return (
        <div className='ticket'>
            <div className='tickent__info'>
                <div className='tickent__info1'>
                    <h4 className="ticket__Carrier">{getName(flight.OutboundLeg.CarrierIds[0], Carriers)}</h4>
                    <div className="ticket__Outbound">
                        <h4>{getName(flight.OutboundLeg.OriginId, Places)}</h4>
                    </div>
                    <h1>➾</h1>
                    <div className='ticket__Outbound'>
                        <h4>{getName(flight.OutboundLeg.DestinationId, Places)}</h4>
                    </div>
                    <h4 className="ticket__date">{flight.OutboundLeg.DepartureDate.split('T')[0]}</h4>
                </div>
                <div className='tickent__info2'>
                    <h4 className="ticket__Carrier">{getName(flight.InboundLeg.CarrierIds[0], Carriers)}</h4>
                    <div className="ticket__Outbound">
                        <h4>{getName(flight.InboundLeg.OriginId, Places)}</h4>
                    </div>
                    <h1>➾</h1>
                    <div className='ticket__Outbound'>
                        <h4>{getName(flight.InboundLeg.DestinationId, Places)}</h4>
                    </div>
                    <h4 className="ticket__date">{flight.InboundLeg.DepartureDate.split('T')[0]}</h4>
                </div>
            </div>
            <div className='ticket__price'>
                <h3>{`$${flight.MinPrice}`}</h3>
                {
                    userId ?
                        <SelectDialog setsuccess={setsuccess} success={success} addTicket={addTicket} userTicket={userTicket}>Select</SelectDialog>
                        : <div>
                            <MaxWidthDialog placeholder="Select"/>
                        </div>
                }
            </div>
        </div>
    )
}


export default TicketComponent

