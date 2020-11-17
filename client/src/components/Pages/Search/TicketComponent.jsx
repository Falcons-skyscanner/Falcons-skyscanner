import React from 'react'
import Button from '@material-ui/core/Button';

const TicketComponent = ({ flight, Carriers, Places, userId }) => {
    const getName = (id, arr) => {
        let name = ''
        arr.forEach((el, i) => {
            if (el.CarrierId === id || el.PlaceId === id) {
                name = el.Name
            }
        })
        return name
    }
    const userTicket = {
        userId : userId,
        price : flight.MinPrice,
        departureAirport:getName(flight.OutboundLeg.OriginId, Places),
        destinationAirport:getName(flight.OutboundLeg.DestinationId, Places),

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
                </div>

            </div>

            <div className='ticket__price'>
                <h3>{`$${flight.MinPrice}`}</h3>
                <Button>Select</Button>
            </div>

        </div>
    )

}


export default TicketComponent

{/* <div className='ticket__arrow'>
                    <p style={{ fontSize: '50px' }}> ⇾ </p>
                </div> */}