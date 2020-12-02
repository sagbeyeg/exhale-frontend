import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
            <div>
             <h3>{this.props.task.title} <em>{this.props.task.status}</em></h3>
             <p>{this.props.task.content}</p>
            </div>
        )
    }
}
