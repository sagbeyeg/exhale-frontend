import React from 'react';

class Login extends React.Component {
  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.loginSubmitHandler()
  }
  render() {
    return (
      <form onSubmit={this.localSubmitHandler}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" placeholder="Email" onChange={this.props.loginClickHandler}/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" onChange={this.props.loginClickHandler} />
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;