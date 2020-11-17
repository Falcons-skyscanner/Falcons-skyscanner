import React from 'react'


class UserFlights extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userTickets : []
        }
    }

    componentDidMount = () => {
        const userId = { userId : this.props.userId }
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
              console.log(data)
              this.setState({ userTickets:data })
            })
    }

    render(){
        return (
            <div className='user__flights'>
            <h1> User Profile Page </h1>
        </div>
        )
    }
}


export default UserFlights