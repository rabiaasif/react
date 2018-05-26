import React, { Component } from "react";
import { Input } from 'antd';
import axios from 'axios';
const Search = Input.Search;
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

 
class Collection extends Component {
    constructor(props) {
    super(props);
    this.state = {
     
      
      result: '',
  
    };
    this.handleSearch = this.handleSearch.bind(this);
   
    };
     
   handleSearch() {
     let url = 'user_movie' 
    console.log(url);
    const new_title = requests.get(url)
  .then(function (response) {
   // alert(response.data);
    this.setState({result: response.data});
    console.log(response.data);
  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  
  });
    
  }
  render() {
    this.handleSearch()



    return (
      <div>
        
            {this.state.result}
      </div>
    );
  }
}
 
export default Collection;