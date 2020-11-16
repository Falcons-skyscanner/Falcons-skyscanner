import React from 'react';
import './App.css';
import HomePage from './components/Pages/Home/index';
import Header from './components/sharedComponents/Header/Header'
import SearchPage from './components/Pages/Search/index'

import { Switch, Route, Redirect } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      flightsData : []
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

  getFlightsData = (data) => {
    this.setState({ flightsData:data })
  }




  render() {
    const { currentUser,flightsData } = this.state
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' render={() => <HomePage getFlightsData={this.getFlightsData} />} />
          <Route path='/search' render={() => <SearchPage flightsData={flightsData} />} />
        </Switch>
        
      </div>
    )
  }
}



export default App;
