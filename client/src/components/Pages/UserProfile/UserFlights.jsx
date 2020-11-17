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
<<<<<<< HEAD
                console.log(data.tickets)
                this.setState({ userTickets: data.tickets })
=======
                console.log(data)
                this.setState({ userTickets: data })
>>>>>>> c6a044d88f7fd740b6e3e79f2f3f10960cce708e
            })
    }

    render() {
        return (
            <div className='user__flights'>
<<<<<<< HEAD
                {
                    this.state.userTickets ?
                        this.state.userTickets.map((ticket, id) => {
                            return <UserTicket ticket={ticket} key={id} />

                        })
                        : <div></div>
                }

=======
                <h1> User Profile Page </h1>
                <UserTicket/>
>>>>>>> c6a044d88f7fd740b6e3e79f2f3f10960cce708e
            </div>
        )
    }
}


export default UserFlights