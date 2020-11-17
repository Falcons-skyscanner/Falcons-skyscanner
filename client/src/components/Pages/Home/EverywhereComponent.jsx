import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


class EveryWhere extends Component {
  render() {

    return (

      <div>

        <h3 > <Link to="/searcheverywhere">Search Everywhere</Link> </h3>

        <div class="column">

          <img src='https://cdn.travelpulse.com/images/e5a9edf4-a957-df11-b491-006073e71405/404747c6-03c2-4924-bc0a-e62e7603089f/630x355.jpg' alt="rome" width="300" height="200" />
          <div class="desc">Rome</div>

        </div>


        <div class="column">

          <img src='https://pix10.agoda.net/geo/city/14932/1_14932_02.jpg?s=1920x822' alt="istanboul" width="300" height="200" />
          <div class="desc">Istanboul</div>

        </div>

        <div class="column">

          <img src='https://tourflag.com/wp-content/uploads/%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%81%D9%8A-%D9%83%D9%88%D8%A7%D9%84%D8%A7%D9%84%D9%85%D8%A8%D9%88%D8%B1.jpg' alt="kualampour" width="300" height="200" />
          <div class="desc">Kuala Lumpur</div>

        </div>


      </div>


    )

  }

}

export default EveryWhere
