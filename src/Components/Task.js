import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
            <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
                <h1>{this.props.task.title} - <em>{this.props.task.status}</em></h1>
                <p>{this.props.task.content}</p>
                <div>
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}
