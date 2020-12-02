import React, { Component } from 'react'

export default class CreateJournalForm extends Component {

    state = {
        title: "",
        entry: "", 
        date: ""
      }

      changeHandler = (e) => {

        console.log("testing", e.target.value)
    
        this.setState({[e.target.name]: e.target.value})
      }

      localSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted", e.target.value)
        this.props.submitHandler({title: e.target.value, entry: e.target.value, date: e.target.value})
    
        this.setState({
            title: "",
            entry: "", 
            date: ""
        });
    
      }


    render() {
        return (
            <form onSubmit ={this.localSubmitHandler} className="create-journal-form">
        <input placeholder="Title" name = "title" value = {this.state.title} onChange ={this.changeHandler}/>
        <input placeholder="Date" name = "date" value = {this.state.date} onChange ={this.changeHandler}/>
        <textarea placeholder="Write your entry here..." name = "entry" value = {this.state.entry} onChange ={this.changeHandler} {/*rows={10}*/} />
        <input type="submit" value="Share your masterpiece" />
      </form>
        )
    }
}

