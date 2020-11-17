import React from 'react'
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

    render() {
        return (
            <div className='user__flights'>
                {
                    this.state.userTickets ?
                        this.state.userTickets.map((ticket, id) => {
                            return <UserTicket ticket={ticket} key={id} />

                        })
                        : <div></div>
                }

            </div>
        )
    }
}


export default UserFlights