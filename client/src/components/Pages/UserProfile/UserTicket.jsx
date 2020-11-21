import React from 'react'
import Button from '@material-ui/core/Button';
// import StripeButton from '../../SharedComponents/Stripe/StripeButton'


const UserTicket = ({ ticket,componentDidMount }) => {
    console.log(ticket)
    
    const removeTicket = (obj) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('/api/flights/removeTicket', requestOptions)
            .then(response => response.json())
            .then(data => {
                componentDidMount()
            })
    }


    return (
        <div className='ticket'>

            <div className='tickent__info'>

                <div className='tickent__info1'>

                    <h4 className="ticket__Carrier">{ticket.carrierOutboundLeg}</h4>

                    <div className="ticket__Outbound">
                        <h4>{ticket.originOutboundLeg}</h4>
                    </div>


                    <h1>➾</h1>

                    <div className='ticket__Outbound'>
                        <h4>{ticket.destinationOutboundLeg}</h4>
                    </div>
                    <h4 className="ticket__date">{ticket.outboundDate}</h4>
                </div>

                <div className='tickent__info2'>

                    <h4 className="ticket__Carrier">{ticket.carrierInboundLeg}</h4>

                    <div className="ticket__Outbound">
                        <h4>{ticket.originInboundLeg}</h4>
                    </div>
                    <h1>➾</h1>
                    <div className='ticket__Outbound'>
                        <h4>{ticket.destinationInboundLeg}</h4>
                    </div>
                    <h4 className="ticket__date">{ticket.inboundDate}</h4>
                </div>

            </div>

            <div className='ticket__price'>
                <h3>{`$${ticket.price}`}</h3>
                <Button onClick={() => removeTicket({id:ticket._id})}> Delete </Button>
            </div>

        </div>
    )

}


export default UserTicket
