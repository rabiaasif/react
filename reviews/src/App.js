import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends Component {
 componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
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
