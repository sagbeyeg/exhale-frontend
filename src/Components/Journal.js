import React, { Component } from 'react'

export default class Journal extends Component {
    render() {
        return (
            <div>
             <h3>{this.props.journal.title}</h3>
             <p>{this.props.journal.entry}</p>
            <small><em>{this.props.journal.date}</em></small>
            </div>
        ); 
    }
}

