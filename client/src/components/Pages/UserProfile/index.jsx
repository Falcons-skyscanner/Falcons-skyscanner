import React from 'react'

const UserProfile =({ name, email }) => {

    
    return(
        <div className='user'>
                    <h4>{name}</h4>
                    <h4>{email}</h4>
                    
        </div>
    )
}

export default UserProfile