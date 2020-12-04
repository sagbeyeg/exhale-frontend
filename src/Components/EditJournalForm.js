import React, { Component } from 'react';

class EditJournalForm extends Component {
  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.editSubmitHandler(e)
    this.props.editClickHandler()
  }

  render() {
    return (
        <form onSubmit ={this.localSubmitHandler} id={this.props.journal.id}>
          <div class="form-group">
            Title:<input class="form-control" name = "title" value = {this.props.journal.title} onChange ={this.props.changeHandler}/>
          </div>
          <div class="form-group">
            Date:<input class="form-control" type=""  name = "date" value = {Date()} onChange ={this.props.changeHandler}/>
          </div>
            Entry:<textarea class="form-control" name = "entry" value = {this.props.journal.entry} onChange ={this.props.changeHandler} />
          <div class="form-group">
          <button class="btn btn-primary">Save Entry!</button> 
          </div>
        </form>
    );
  }
}

export default EditJournalForm;