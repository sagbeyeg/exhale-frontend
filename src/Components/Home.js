import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
        <h1>Welcome Back to Exhale!</h1>
        <br></br>
        <h3>Exhale is a mindfulness app designed to help you live, and be, in the moment.</h3>
        <br></br>
        <h3>So take a deep breath...and <em><big>Exhale</big></em></h3>
        {/* <video  autoplay loop muted playsinline src="./exhale-logo.mp4" style={{height:"1.1cm"}} /> */}
      </div>
  )}
}

export default Home;