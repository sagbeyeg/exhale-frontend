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
      
        <form onSubmit ={e => this.localSubmitHandler(e)} className="create-task-form">
          <input placeholder="Title" name = "title" value = {newTask.title} onChange ={this.props.changeHandler}/>
          <input placeholder="Status" name = "status" value = {newTask.status} onChange ={this.props.changeHandler}/>
          <textarea placeholder="Write your task here..." name = "content" value = {newTask.content} onChange ={this.props.changeHandler} rows={10} />
          <input type="submit" value="Write it down!" />
        </form>
      
    )
  }





}
