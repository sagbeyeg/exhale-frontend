import React, { Component } from 'react'

export default class CreateTaskForm extends Component {


  changeHandler = (e) => {

    console.log("testing", e.target.value)

    this.setState({[e.target.name]: e.target.value})
  }

  localSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted", e.target.value)
    // this.props.submitHandler()
  }


  render() {
    const { newTask } = this.props
    return (
      <form onSubmit ={e => this.props.localSubmitHandler(e)} className="create-task-form">
        <input placeholder="Title" name = "title" value = {newTask.title} onChange ={this.props.changeHandler}/>
        <input placeholder="Status" name = "status" value = {newTask.status} onChange ={this.props.changeHandler}/>
        <textarea placeholder="Write your task here..." name = "content" value = {newTask.content} onChange ={this.props.changeHandler} rows={10} />
        <input type="submit" value="Write it down!" />
      </form>
    )
  }





}
