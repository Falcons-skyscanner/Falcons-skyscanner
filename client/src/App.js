import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Everywhere from './components/Pages/Home/EverywhereComponent.jsx';
import SearchEveryWhere from './components/Pages/Home/SearcheverywhereComponent.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            
      <Route path="/home" component={Everywhere} />
      <Route path="/searcheverywhere" component={SearchEveryWhere} />
     
     </div>
      </Router>       
      

    );
  }
}


export default App;
