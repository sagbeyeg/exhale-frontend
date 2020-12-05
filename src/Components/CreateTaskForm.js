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
          <input class="btn btn-primary">Write it down!</input>
        </form>
    
    )
  }





}
