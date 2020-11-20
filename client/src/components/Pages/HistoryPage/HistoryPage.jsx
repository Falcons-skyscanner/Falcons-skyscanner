import React from 'react';
import UserTicket from '../UserProfile/UserTicket'
import UserDetails from '../UserProfile/UserDetails'
import './History.css'

class HistoryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            soldTickets: []
        }
    }

    componentDidMount = () => {
        this.getSoldTickets({ userId: this.props.userId })
    }

    getSoldTickets = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-sky': localStorage.getItem('auth-sky')
            },
            body: JSON.stringify(obj)

        };
        fetch('http://localhost:5000/api/flights/soldTickets', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.tickets)
                this.setState({ soldTickets: data.tickets })
            })
    }

    render() {
        console.log(this.state.soldTickets)
        const { name, email } = this.props
        return (
            <div className='user'>
            <div className='user__details'>
                <UserDetails name={name} email={email} />
            </div>
                <div className='histroy'>
                    <h1> Paid Tickets </h1>
                    {
                        this.state.soldTickets.length !== 0 ?
                            this.state.soldTickets.map((ticket, id) => {
                                return <UserTicket ticket={ticket} key={id} componentDidMount={this.componentDidMount} />
                            })
                            : <div><h3>No Tickets</h3></div>
                    }
                </div>
            </div>
        )
    }
}



export default HistoryPage