import React, { Component } from 'react';

class EditJournalForm extends Component {
  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.editSubmitHandler(e)
    this.props.editClickHandler()
  }

  render() {
    return (
        <form onSubmit ={this.localSubmitHandler} className="create-journal-form" id={this.props.journal.id}>
          <input  name = "title" value = {this.props.journal.title} onChange ={this.props.changeHandler}/>
          <input type=""  name = "date" value = {Date()} onChange ={this.props.changeHandler}/>
          <textarea name = "entry" value = {this.props.journal.entry} onChange ={this.props.changeHandler} />
          <input type="submit" value="Save Entry!" />
        </form>
    );
  }
}

export default EditJournalForm;