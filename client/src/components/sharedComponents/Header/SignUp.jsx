import React from 'react'
import { Button, Input } from '@material-ui/core'

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
        fetch('http://localhost:5000/api/users/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    localStorage.setItem('auth-sky', data.token)
                    window.location.reload(false)
                }
            })
    }

    signUp = () => {
        this.postReq(this.state)
    }




    render() {

        const { name, email, password } = this.state
        return (

            <div className='login'>
                <Input className='Input'
                    placeholder='username ..'
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />
                <br />
                <Input className='Input'
                    placeholder='email ..'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <Input className='Input'
                    placeholder='password ..'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                />

                <Button type='submit' className='login_button' onClick={this.signUp} > Sign Up </Button>
            </div>

        )
    }
}


export default SignUp