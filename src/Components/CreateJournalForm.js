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
        <form onSubmit ={this.localSubmitHandler} className="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
          <div class="form-group">
            <input placeholder="Title" class="form-control" name = "title" value = {this.props.newJournal.title} onChange ={this.props.journalChangeHandler}/>
          </div>
          <div class="form-group">
            <input class="form-control" type="" placeholder="Date" name = "date" value = {Date()} onChange ={this.props.journalChangeHandler}/>
          </div>
          <div class="form-group">
            <textarea class="form-control" placeholder="Write your entry here" name = "entry" value = {this.props.newJournal.entry} onChange ={this.props.journalChangeHandler} />
          </div>
          <button class="btn btn-primary">Submit Entry!</button> 
        </form>
        )
    }
}



