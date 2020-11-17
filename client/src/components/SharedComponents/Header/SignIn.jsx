import React from 'react'
import SignUp from './SignUp'
import { Button,TextField  } from '@material-ui/core'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            signedUp: true
        }
    }

    postMethod = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/api/users/login', requestOptions)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                if(data.success){
                    localStorage.setItem('auth-sky', data.token )
                    localStorage.setItem('userId', data.userId)
                    window.location.reload()
                }
            })
    }

    signIn = () => {
        this.postMethod(this.state)
        // window.location.reload(false)
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        console.log(value)
    }

    signUpStatus = () => {
        this.setState({ signedUp: !this.state.signedUp })
    }


    render() {
        const { email, password,signedUp } = this.state
        return (
            <div>
                {
                    signedUp ?
                        <div className='login'>
                            <TextField  className='Input'
                                label="Email"
                                type='email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                            />
                            <br />
                            <TextField  className='Input'
                                label="Password"
                                type='password'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                            />
                            <Button type='submit' className='dialog_button' onClick={this.signIn} > Log In </Button>
                            <Button type='submit' className='dialog_button' onClick={this.signUpStatus} > Sign Up </Button>
                        </div> :
                        <SignUp signUpStatus={this.signUpStatus} />
                }

            </div>

        )
    }
}


export default SignIn