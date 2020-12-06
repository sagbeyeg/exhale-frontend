import React, { Component } from 'react'
import EditJournalForm from './EditJournalForm';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default class Journal extends Component {
    state = {
        edit: false
    }

    editClickHandler = () => {
        this.setState(prevState => ({edit: !prevState.edit }),() => console.log(this.state.edit))
    }

    render() {
        return (
            <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white', marginTop: '50px'}}>
            {this.state.edit ?              
                <EditJournalForm journal={this.props.journal} changeHandler={this.props.changeHandler} editSubmitHandler={this.props.editSubmitHandler} editClickHandler={this.editClickHandler}/> 
            :
                <div>
                    <h1>{this.props.journal.title}</h1>
                    <p>{this.props.journal.entry}</p>
                    <small><em>{this.props.journal.date? this.props.journal.date.split("T")[0] : this.props.journal.date}</em></small>
                    <div>
                        <button class="btn btn-secondary" type="button" onClick={this.editClickHandler}>Edit</button>
                        <button type="button" class="btn btn-secondary" id={this.props.journal.id} onClick={e => this.props.deleteJournal(e)}>Delete</button>
                        {/* </ButtonGroup> */}
                    </div>
                </div>
            } 
            </div>
        ); 

    }
}

