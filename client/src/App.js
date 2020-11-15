import React from 'react';
import './App.css';
import SearchComponent from './components/Pages/Home/SearchComponent';
import Header from './components/SharedComponents/Header/Header'
import SearchPage from './components/Pages/Search/index'

import { Switch, Route, Redirect } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
    }
  }

  componentDidMount = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-sky': localStorage.getItem('auth-sky')
      }

    };
    fetch('http://localhost:5000/api/users/auth', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ currentUser : data.name })
      })
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={SearchComponent} />
          <Route exact path='/search' component={SearchPage} />
        </Switch>
        
      </div>
    )
  }
}



export default App;
