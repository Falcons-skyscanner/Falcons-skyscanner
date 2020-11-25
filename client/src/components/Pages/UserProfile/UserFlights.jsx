import React from 'react'
import StripeButton from '../../SharedComponents/Stripe/StripeButton'
import UserTicket from './UserTicket'


class UserFlights extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userTickets: []
        }
    }

    componentDidMount = () => {
        const userId = { userId: this.props.userId }
        this.getTickets(userId)
    }

    getTickets = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-sky': localStorage.getItem('auth-sky')
            },
            body: JSON.stringify(obj)

        };
        fetch('http://localhost:5000/api/flights/userTickets', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.tickets)
                this.setState({ userTickets: data.tickets })
            })
    }

    totalAcc = (usertickets) => {
        console.log(usertickets.reduce(( acc,userticket ) => acc + Number(userticket.price), 0))
        return usertickets.reduce(( acc,userticket ) => acc + Number(userticket.price), 0)
    }

    

    render() {
        
        return (

            <div className='user__flights'>
                <h1 style={{alignSelf:'flex-start'}}>User Tickets</h1>
                {
                    this.state.userTickets.length!==0 ?
                        this.state.userTickets.map((ticket, id) => {
                            return <UserTicket ticket={ticket} key={id} componentDidMount={this.componentDidMount} />

                        })
                        : <div  style={{alignSelf:"flex-start"}}><h3>No Tickets</h3></div>
                }
                <div className='line'></div>
                <div className='user__stripe'>
                    <StripeButton name={this.props.name} userId={this.props.userId} price={this.totalAcc(this.state.userTickets)} />
                </div>

            </div>
        )
    }
}


export default UserFlights