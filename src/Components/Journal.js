import React, { Component } from 'react'
import EditJournalForm from './EditJournalForm';

export default class Journal extends Component {
    state = {
        edit: false
    }

    editClickHandler = () => {
        this.setState(prevState => ({edit: !prevState.edit }),() => console.log(this.state.edit))
    }

    render() {
        return (
            <>
            {this.state.edit ?              
                <EditJournalForm journal={this.props.journal} changeHandler={this.props.changeHandler} editSubmitHandler={this.props.editSubmitHandler} editClickHandler={this.editClickHandler}/> 
            :
                <div>
                    <h3>{this.props.journal.title}</h3>
                    <p>{this.props.journal.entry}</p>
                    <small><em>{this.props.journal.date? this.props.journal.date.split("T")[0] : this.props.journal.date}</em></small>
                    <div>
                        <button type="button" onClick={this.editClickHandler}>Edit</button>
                        <button type="button" class="btn btn-danger" id={this.props.journal.id} onClick={e => this.props.deleteJournal(e)}>Delete</button>
                    </div>
                </div>
            } 
            </>
        ); 

    }
}

