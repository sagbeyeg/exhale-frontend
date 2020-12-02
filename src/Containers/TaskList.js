import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Task from '../Components/Task'

export default class TaskList extends Component {
    state = {
        currentTask: []
      }
      renderTask= (e) => {
        const title = e.target.innerText.split(" - ")[0]
        console.log(title)
        const task = this.props.user.tasks.find(task => task.title === title)
        this.setState({currentTask: task}, () => console.log(this.state.currentTask))
      }
    
    
      render() {
        return (
          <div className ="journal-list">
              <h3>Task</h3>
            <Menu vertical inverted>
                {this.props.user.tasks.map(task =>
                  <Menu.Item key={task.id} onClick={this.renderTask}>
                    {`${task.title} - (${task.status})`}
                  </Menu.Item> 
                )}
            </Menu>
            <Task task = {this.state.currentTask} key = {this.state.currentTask.id}/>
            
          </div>
        );
      }
}
