import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const UserDetails = ({ name, email }) => {
    return (
        <div className='user__details'>
            
            <div className='user__card'>
                <img className='user__avatar' src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' alt='ss' />

                <div className='user__info'>
                    <h4>{name}</h4>
                    <h4>{email}</h4>
                    <Link to='/history' style={{ textDecoration:'none' }}>
                    <Button> Paid Tickets </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserDetails