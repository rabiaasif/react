import React, { Component } from "react";
import { Input, Icon } from 'antd';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css';

import axios from 'axios';
const { Header, Content, Footer } = Layout;
const api_route = 'http://127.0.0.1:5000/' || `${process.env.REACT_APP_BACKEND_HOST}` ; 
const responseBody = res => res.body;
const requests = {
  get: (url, params) =>
    axios({
      method: 'GET',
      url: `${api_route}${url}` ,
      params
    })
};
 
class Movie extends Component {

    constructor(props) {
    super(props);
    this.state = {
      userName: '',
      movie: '',
      genre: '',
      actor: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeActor = this.handleChangeActor.bind(this);
    this.handleChangeMovie = this.handleChangeMovie.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
    handleChangeName(event) {
    this.setState({userName: event.target.value});
  }
  handleChangeGenre(event) {
    this.setState({genre: event.target.value});
  }
  handleChangeActor(event) {
    this.setState({actor: event.target.value});
  }
  handleChangeMovie(event) {
    this.setState({movie: event.target.value});
  }

   handleButtonClick(event) {
    let url = "add"+"/"+ this.state.userName +"/" + this.state.genre + "/" + this.state.actor + "/" + this.state.movie;
    console.log(url);
    const new_title = requests.get(url)
  .then(function (response) {
    alert(response.data);
  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  
  });

  }

  render() {
    console.log(this.state.userName);
    console.log(this.state.genre);
    console.log(this.state.actor);
    console.log(this.state.movie);
  
    return (
      <div>
      <p>Please fill out all fields!</p>
 
     <Input style={{ width: 355}}
        placeholder="Enter username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        userName={this.state.userName}
        onChange={this.handleChangeName}/>
        <br/>


        <Input style={{ width: 355}}
        placeholder="movie title"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        movie={this.state.movie}
        onChange={this.handleChangeMovie}/>

        <br/>

          <Input style={{ width: 355}}
        placeholder="Enter genre-genre-...-genre"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        genre={this.state.genre}
        onChange={this.handleChangeGenre}/>

        <br/>


        <Input style={{ width: 355}}
        placeholder="Enter actor-actor-...-actor"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        actor={this.state.actor}
        onChange={this.handleChangeActor}/>
        
        <div>
        <Button value ="Submit"  onClick = {this.handleButtonClick} >Submit</Button>
        </div>
  
      
       </div>
         
    );
  }
}
 
export default Movie;