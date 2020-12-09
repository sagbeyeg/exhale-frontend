import React, { Component } from 'react';

class ForgotPassword extends Component {
  render() {
    return (
      <div class="slim login">
      <form onSubmit={this.localSubmitHandler} class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
        <h1>Find Your Account</h1>
        <small><p>Please enter your email to search for your account</p></small>
        <div class="form-group">
          <input type="text" class="form-control" name="email" placeholder="Email" onChange={this.props.loginClickHandler}/>
        </div>
        <button class="btn btn-primary">Search</button>
      </form>
    </div>
    );
  }
}

export default ForgotPassword;