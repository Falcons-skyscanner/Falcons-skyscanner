import React from 'react'
import { Button, TextField  } from '@material-ui/core'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        console.log(value)
    }


    postReq = (obj) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('/api/users/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    localStorage.setItem('auth-sky', data.token)
                    localStorage.setItem('userId', data.userId)
                    window.location.reload()
                }
            })
    }

    signUp = (e) => {
        this.postReq(this.state)
    }




    render() {

        const { name, email, password } = this.state
        return (

            <div className='login'>
                <TextField className='Input'
                    label='Username'
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />
                <br />
                <TextField className='Input'
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <TextField className='Input'
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                />

                <Button type='submit' className='dialog_button' onClick={this.signUp} > Sign Up </Button>
            </div>

        )
    }
}


export default SignUp