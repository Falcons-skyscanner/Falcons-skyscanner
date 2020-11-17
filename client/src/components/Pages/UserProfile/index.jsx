import React from 'react'
import UserDetails from './UserDetails'
import UserFlights from './UserFlights'
import './User.css'

const UserProfile = ({name,email ,userId}) => {
    return(
        <div className='user'>
            <UserDetails name={name} email={email} />
            <UserFlights userId={userId}/>
        </div>
    )
}

export default UserProfile