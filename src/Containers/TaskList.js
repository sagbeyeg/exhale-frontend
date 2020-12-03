import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Task from '../Components/Task'
import CreateTaskForm from '../Components/CreateTaskForm'

export default class TaskList extends Component {
    state = {
      currentTask: [],
      form: false
    }
    renderTask= (e) => {
      const title = e.target.innerText.split(" - ")[0]
      console.log(title)
      const task = this.props.user.tasks.find(task => task.title === title)
      this.setState({currentTask: task}, () => console.log(this.state.currentTask))
    }
    
    clickHandler = () => {
      this.setState(prevState => ({form: !prevState.form}))

    }
    
    render() {
      console.log(this.props)
      return (
        <div className ="journal-list">
          <Menu vertical inverted>
              {this.props.user.tasks.map(task =>
                <Menu.Item key={task.id} onClick={this.renderTask}>
                  {`${task.title} - (${task.status})`}
                </Menu.Item> 
              )}
          </Menu>
          <h3>Tasks</h3>
          {this.state.form? 
            <>
            <button onClick={this.clickHandler}>Close Form</button>
            <CreateTaskForm newTask={this.props.newTask} submitHandler={this.props.submitHandler} changeHandler={this.props.changeHandler} /> 
            </>
            : 
            <>
            <button onClick={this.clickHandler}>New Task</button>
            <Task task = {this.state.currentTask} key = {this.state.currentTask.id}/>
            </>   
            } 
        </div>
      );
    }
}
