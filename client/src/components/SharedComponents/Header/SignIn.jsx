import React from 'react'
import SignUp from './SignUp'
import { Button, TextField } from '@material-ui/core'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
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
        fetch('/api/users/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    localStorage.setItem('auth-sky', data.token)
                    localStorage.setItem('userId', data.userId)
                    this.props.setUser(data.userId)
                }
            })
    }

    signIn = (e) => {
        e.preventDefault()
        this.postMethod(this.state)
        // window.location.reload(false)
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        console.log(value)
    }

    signUpStatus = (e) => {
        e.preventDefault()
        this.setState({ signedUp: !this.state.signedUp })
    }


    render() {
        const { email, password, signedUp } = this.state
        return (
            <div>
                {
                    signedUp ?
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <form className='login' onSubmit={this.signIn}>
                                <TextField className='Input'
                                    label="Email"
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <TextField className='Input'
                                    label="Password"
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    required
                                />
                                <Button type='submit' className='dialog_button'  > Log In </Button>
                            </form>
                        </div > :
                        <SignUp signUpStatus={this.signUpStatus} setUser={this.props.setUser} />
                }

            </div>

        )
    }
}


export default SignIn