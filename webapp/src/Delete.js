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
 
class Delete extends Component {

    constructor(props) {
    super(props);
    this.state = {
      movie: '',
      userName: '',
    
    };
    
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeMovie = this.handleChangeMovie.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
    
  handleChangeUser(event) {
    this.setState({userName: event.target.value});
  }
 
  handleChangeMovie(event) {
    this.setState({movie: event.target.value});
  }

   handleButtonClick(event) {
    let url = "delete" +"/" +this.state.movie +  "/" + this.state.userName ;
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

    console.log(this.state.genre);
    console.log(this.state.actor);
    console.log(this.state.movie);
  
    return (
      <div>
      <p>Please fill out all fields!</p>
 
     


        <Input style={{ width: 355}}
        placeholder="movie title"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        movie={this.state.movie}
        onChange={this.handleChangeMovie}/>

        <br/>

          <Input style={{ width: 355}}
        placeholder="Enter User"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        userName={this.state.userName}
        onChange={this.handleChangeUser}/>

        <br/>


      
        
        <div>
        <Button value ="Submit"  onClick = {this.handleButtonClick} >Submit</Button>
        </div>
  
      
       </div>
         
    );
  }
}
 
export default Delete;