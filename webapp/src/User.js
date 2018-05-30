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
 
class User extends Component {

    constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
    handleChangeName(event) {
    this.setState({userName: event.target.value});
  }
   handleButtonClick(event) {
    let url = this.state.userName;
  
    const new_title = requests.get(url)
  .then(function (response) {
    alert(response.data);
  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  
  });

  }

  render() {
    
  
    return (
      <div>
 
     <Input style={{ width: 355}}
        placeholder="Enter username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        userName={this.state.userName}
        onChange={this.handleChangeName}/>
        <div>
        <Button value ="Submit"  onClick = {this.handleButtonClick} >Submit</Button>
        </div>
  
      
       </div>
         
    );
  }
}
 
export default User;