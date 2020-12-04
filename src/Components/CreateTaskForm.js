import React, { Component } from 'react'

export default class CreateTaskForm extends Component {

  localSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted", e.target)
    this.props.submitHandler()
    this.props.clickHandler()
  }


  render() {
    const { newTask } = this.props
    return (
      
        <form onSubmit ={e => this.localSubmitHandler(e)} class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
          <div class="form-group">
            <input class="form-control" placeholder="Title" name = "title" value = {newTask.title} onChange ={this.props.changeHandler}/>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Status" name = "status" value = {newTask.status} onChange ={this.props.changeHandler}/>
          </div>
          <div class="form-group">
            <textarea class="form-control" placeholder="Write your task here..." name = "content" value = {newTask.content} onChange ={this.props.changeHandler} rows={10} />
          </div>
          <button class="btn btn-primary">Write it down!</button>
        </form>
    //   <form onSubmit={this.localSubmitHandler} class="card">
    //   <h1>Login</h1>
    //   <div class="form-group">
    //     {/* <label for="email">Email: </label> */}
    //     <input type="text" class="form-control" name="email" placeholder="Email" onChange={this.props.loginClickHandler}/>
    //   </div>
    //   <div class="form-group">
    //     {/* <label for="password">Password: </label> */}
    //     <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.props.loginClickHandler} />
    //   </div>
    //   <button class="btn btn-primary">Login</button> 
    // </form>
    )
  }





}
