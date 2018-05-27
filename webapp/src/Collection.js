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
      result2: '',
      result3: '',
  
    };
    this.handleSearch = this.handleSearch.bind(this);
   
    };
     
   handleSearch() {
     let url = 'user_movie' 
    console.log(url);
    const user_movie = requests.get(url)
  .then(function (response) {
   // alert(response.data);
    this.setState({result: response.data});
    console.log(response.data);
  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  
  });

    let url2 = 'movie_genre'
    const movie_genre = requests.get(url2)
  .then(function (response) {
   // alert(response.data);
    this.setState({result2: response.data});
    console.log(response.data);
  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  });
   let url3 = 'movie_actor'
    const movie_actor = requests.get(url3)
  .then(function (response) {
   // alert(response.data);
    this.setState({result3: response.data});
    console.log(response.data);
  }.bind(this))
  .catch(function (error) {
    console.log(error.response);
  });
  }
  render() {
    this.handleSearch()
    var lst = (this.state.result).split("-");
    var temp = lst
    var map1 = temp.map(function(val, i ) {return   <div> {val} </div>;});


    var lst2 = (this.state.result2).split("-");
    var temp2 = lst2
    var map2 = temp2.map(function(val, i ) {return   <div> {val} </div>;});

    var lst3 = (this.state.result3).split("-");
    var temp3 = lst3
    var map3 = temp3.map(function(val, i ) {return   <div> {val} </div>;});


    
 




    return (
      <div>
          <p>user: movie collection database </p>
            {map1}
            <br/>
           
            <br/>
            <p>movie collection: genre database</p>
            {map2}
            <br/>
            <p>actor: movie  database</p>
            {map3}
      </div>
    );
  }
}
 
export default Collection;