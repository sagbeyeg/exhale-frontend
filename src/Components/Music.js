import React, { Component } from 'react';

class Music extends Component {
  
  render() {
    return (
      <div class="card" id="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'} }>
          <h1> Music </h1>
          <br></br>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4FHZO7bx8oeB" width="100%" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }
}
   

export default Music;



