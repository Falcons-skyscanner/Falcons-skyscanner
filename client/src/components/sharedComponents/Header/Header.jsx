import React from 'react'
import { Button } from '@material-ui/core'
import MaxWidthDialog from './MaxWidthDialog'

import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    logOut = () => {
        localStorage.removeItem('auth-sky')
        window.location.reload()
    }


    render() {
        return (
            <div className='Header'>
                <img className='Header__logo' src='https://i.pinimg.com/originals/0d/73/bb/0d73bb04a062426053e4b712e3df21e6.png' alt='logo' />
                {
                    this.props.currentUser ? 
                        <Button type='submit' variant="outlined" color="primary" className='login_button' onClick={this.logOut}> LogOut </Button>
                        
                        :
                        <MaxWidthDialog />
                }
            </div>
        )
    }
}


export default Header