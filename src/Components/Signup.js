import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div class="slim">
        <form onSubmit={this.localSubmitHandler} class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
          <h1>Create Your Account</h1>
          <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Name" onChange={null}/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="email" placeholder="Email" onChange={null}/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" onChange={null} />
          </div>
          <button class="btn btn-primary">Submit</button> 
        </form>
      </div>
    );
  }
}

export default Signup;