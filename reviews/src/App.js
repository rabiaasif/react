import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends Component {
 componentDidMount() {
        let place = {lat: -25.344, lng: 131.036};
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: place,
          zoom: 8
        });
        let marker = new window.google.maps.Marker({position: place, map: map});
      }
  render() {
    return (
      <div className="App">
       <p>SIMPLE MAP</p>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
