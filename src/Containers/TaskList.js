import React, { Component } from 'react'
import Task from '../Components/Task'
import CreateTaskForm from '../Components/CreateTaskForm'
import Dropdown from 'react-bootstrap/Dropdown'

export default class TaskList extends Component {
    state = {
      currentTask: [],
      form: false
    }
    renderTask= (e) => {
      const title = e.target.innerText.split(" - ")[0]
      console.log(title)
      const task = this.props.tasks.find(task => task.title === title)
      this.setState({currentTask: task}, () => console.log(this.state.currentTask))
    }
    
    clickHandler = () => {
      this.setState(prevState => ({form: !prevState.form}))

    }
    
    render() {
      console.log(this.props)
      let taskArray = (this.props.tasks? this.props.tasks : [])
      return (
        <div className ="journal-list">
              <h3 class="large-button-text">Tasks</h3> 
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Your Tasks
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {taskArray.map(task =>
                <Dropdown.Item key={task.id} onClick={this.renderTask}>
                  {`${task.title} - (${task.status})`}
                </Dropdown.Item> 
              )}
            </Dropdown.Menu>
          </Dropdown>
          {this.state.form? 
            <>
            <button onClick={this.clickHandler} class="ui button">Close Form</button>
            <CreateTaskForm newTask={this.props.newTask} submitHandler={this.props.submitHandler} changeHandler={this.props.changeHandler} clickHandler={this.clickHandler} /> 
            </>
            : 
            <>
            <button onClick={this.clickHandler} class="ui button">New Task</button>
            <Task task = {this.state.currentTask} key = {this.state.currentTask.id}/>
            </>   
            } 
        </div>
      );
    }
}
