import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
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
        localStorage.removeItem('userId')
        window.location.reload()
    }


    render() {
        return (
            <div className='Header'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img className='Header__logo' src='https://www.falconltd.co.nz/wp-content/uploads/2019/06/Falcon_logo_trans.png' alt='logo' />
                </Link>
                {
                    this.props.userId ?
                        <div className='header__profile'>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                            <Avatar className='header__avatar' alt={this.props.currentUser} src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
                            </Link>
                            <Button type='submit' variant="outlined" color="primary" className='login_button' onClick={this.logOut}> LogOut </Button>
                        </div>
                        :
                        <MaxWidthDialog setUser={this.props.setUser} placeholder="Login"/>
                }
            </div>
        )
    }
}


export default Header