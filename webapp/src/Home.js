import React, { Component } from "react";


 
class Home extends Component {
  
    
  render() {
   
    return (
      <div >
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Welcome to Movie Catelog!</h2>
        <p style={{ display: 'flex', justifyContent: 'center' }}>
        -You can browse, store, search for movies on here!
        <br/>
        -Search for movies by genre, actor, user, or movie title.
        <br/>
        -Add movies to users library.
        <br/>
        -Create or delete users in the form.
        

        </p>

      </div>
    );
  }
}
 
export default Home;