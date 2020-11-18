import React from 'react';
import './App.css';
import HomePage from './components/Pages/Home/index';
import Header from './components/SharedComponents/Header/Header'
import SearchPage from './components/Pages/Search/index'
import UserProfile from './components/Pages/UserProfile/index'
import SearchEveryWhere from './components/Pages/Home/SearchEveryWhereComponent'

import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userId: localStorage.getItem('userId'),
      currentUser: '',
      email: '',
      flightsData: []
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
        this.setState({ currentUser: data.name, email: data.email })
      })
  }

  getFlightsData = (data) => {
    this.setState({ flightsData: data } )
  }




  render() {
    const { currentUser, flightsData, userId } = this.state
    return (
      <div className="App">
        <Header currentUser={currentUser} userId={userId} />
        <Switch>
          <Route exact path='/' render={() => <HomePage getFlightsData={this.getFlightsData} />} />
          <Route path='/search' render={() => <SearchPage flightsData={flightsData} getFlightsData={this.getFlightsData} userId={userId} />} />
          <Route path='/searcheverywhere' render={() => <SearchEveryWhere /> } />
          <Route path='/profile' render={() => userId ?
            <UserProfile name={this.state.currentUser} email={this.state.email} userId={userId} />
            : <Redirect to='/' />} />
        </Switch>

      </div>
    )
  }
}



export default App;
