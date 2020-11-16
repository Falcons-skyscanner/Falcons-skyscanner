import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


class Everywhere extends Component {
  render() {
    return (
      <div>
        <div>
        <h2> <Link to="/searcheverywhere">Search Everywhere</Link> </h2>

        </div>

        <div class="row">
          <div class="column">
            <div class="card">
              <img src='https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg' width="300" height="200" />
              <p>Rome</p>
            </div>
          </div>

          
            <div class="column">
              <div class="card">
                <img src='https://pix10.agoda.net/geo/city/14932/1_14932_02.jpg?s=1920x822' width="300" height="200" />
                <p>Istanboul</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src='https://tourflag.com/wp-content/uploads/%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%81%D9%8A-%D9%83%D9%88%D8%A7%D9%84%D8%A7%D9%84%D9%85%D8%A8%D9%88%D8%B1.jpg' width="300" height="200" />
                <p>Kuala Lumpur</p>
              </div>
            </div>
          </div>

        </div>


    )
  }
}




export default Everywhere;


