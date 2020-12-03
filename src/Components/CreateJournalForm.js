import React, { Component } from 'react'

export default class CreateJournalForm extends Component {

      localSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted", e.target)
        this.props.journalSubmitHandler()
        this.props.clickHandler()
      }


    render() {
        return (
        <form onSubmit ={this.localSubmitHandler} className="create-journal-form">
          <input placeholder="Title" name = "title" value = {this.props.newJournal.title} onChange ={this.props.journalChangeHandler}/>
          <input type="" placeholder="Date" name = "date" value = {Date()} onChange ={this.props.journalChangeHandler}/>
          <textarea placeholder="Write your entry here" name = "entry" value = {this.props.newJournal.entry} onChange ={this.props.journalChangeHandler} />
          <input type="submit" value="Submit Entry!" />
        </form>
        )
    }
}



