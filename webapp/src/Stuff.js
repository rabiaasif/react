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

 
class Stuff extends Component {
    constructor(props) {
    super(props);
    this.state = {
     
      search_entry: '',
      search_result: '',
  
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
   
    };
     handleChangeSearch(event) {
    this.setState({search_entry: event.target.value});
  }
   handleSearch(event) {
     let url = 'search/' + this.state.search_entry;
 
    const new_title = requests.get(url)
  .then(function (response) {
   // alert(response.data);
    this.setState({search_result: response.data});

  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  
  });
    
  }
  render() {
    var lst = (this.state.search_result).split("-");
    var temp = lst
    var map1 = temp.map(function(val, i ) {return   <div> {val} </div>;});


    return (
      <div>
        
        <Search 
            search_entry={this.state.search_entry}
            onChange={this.handleChangeSearch} 
            onSearch={this.handleSearch}
            style={{ width: 355}} placeholder="Search by Actor, User, Genre or Movie Title" enterButton/>
            <br/>
            {map1}
      </div>
    );
  }
}
 
export default Stuff;