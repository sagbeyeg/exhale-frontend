import React from 'react';
import {Link} from 'react-router-dom'

class Login extends React.Component {
  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.loginSubmitHandler()
  }
  render() {
    return (
      <div class="slim login">
        <form onSubmit={this.localSubmitHandler} class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
          <h1>Login</h1>
          <div class="form-group">
            <input type="text" class="form-control" name="email" placeholder="Email" onChange={this.props.loginClickHandler}/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.props.loginClickHandler} />
          </div>
          <button class="btn btn-primary">Login</button> 
          <small><h5><Link to="/forgotpassword">Forgot your password?</Link> | <Link to="/signup">Sign up for Exhale</Link></h5></small>
        </form>
      </div>
    );
  }
}

export default Login;