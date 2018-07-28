import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const api_route = 'http://api.open-notify.org/astros.json'  ; 

const requests = {
  get: (url, params) =>
    axios({
      method: 'GET',
      url: `${api_route}` ,
      params
    })
};
class App extends Component {
      constructor(props) {
    super(props);
    this.state = {};
  
    this.testGet = this.testGet.bind(this);
  }


     testGet(event) {
    let url = '';

    requests.get(url)
  .then(function (response) {
   
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.response);
  
  });

  }
  render() {
    this.testGet()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
