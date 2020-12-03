import React, { Component } from 'react'

export default class Journal extends Component {
    render() {
        console.log(this.props.journal.date)
        // if (this.props.journal.date) {
        //     const ogDate = this.props.journal.date
        //     const remove_after= ogDate.indexOf('T')
        //     const date =  ogDate.substring(0, remove_after)
        // } 

        return (
            <div>
             <h3>{this.props.journal.title}</h3>
             <p>{this.props.journal.entry}</p>
            <small><em>{this.props.journal.date? this.props.journal.date.split("T")[0] : this.props.journal.date}</em></small>
            <div>
                <button type="button">Edit</button>
                <button  class="btn btn-danger">Delete</button>
            </div>
            </div>
        ); 

    }
}

