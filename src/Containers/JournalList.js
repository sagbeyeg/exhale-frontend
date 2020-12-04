import React, { Component } from 'react'
import Journal from '../Components/Journal' 
import { Menu, Button } from 'semantic-ui-react'
import CreateJournalForm from '../Components/CreateJournalForm'
import Dropdown from 'react-bootstrap/Dropdown'

// import EditJournalForm from '../Components/EditJournalForm'

export default class JournalList extends Component {
  state = {
    currentJournal: {
      
    }, 
    form: false
  }

  changeHandler =  (e) => {
    this.setState({currentJournal: {...this.state.currentJournal, [ e.target.name ]: e.target.value}}, () => console.log(this.state.currentJournal))
  }

  clickHandler = () => {
    this.setState(prevState => ({form: !prevState.form}))
  }

  renderEntries= (e) => {
    const title = e.target.innerText
    const journal = this.props.journals.find(journal => journal.title === title)
    this.setState({currentJournal: journal}, () => console.log(this.state.currentJournal))

  }


  render() {
    console.log(this.state.currentJournal)
    return (
      <div className ="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
        <h3 class="large-button-text">Journal Entries</h3>
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Your Journal Entries
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.props.journals? this.props.journals.map(journal =>
                <Dropdown.Item key={journal.id} onClick={this.renderEntries}>
                  {journal.title}
                </Dropdown.Item> 
              ) : null }
            </Dropdown.Menu>
          </Dropdown>
        <div class="body">
        {this.state.form? 
          <>
          <Button onClick={this.clickHandler}>Close Form</Button>
          <CreateJournalForm newJournal={this.props.newJournal} journalSubmitHandler={this.props.journalSubmitHandler} journalChangeHandler={this.props.journalChangeHandler} clickHandler={this.clickHandler} /> 
          </>
          : 
          <>
          <button class="ui button" onClick={this.clickHandler}>New Journal</button> 
          <Journal journal = {this.state.currentJournal} key = {this.state.currentJournal.id} changeHandler={this.changeHandler} editSubmitHandler={this.props.editSubmitHandler} deleteJournal={this.props.deleteJournal} />
          </>    
        }
        </div>  
      </div>
    );
  }


}



// renderBook = (e) => {
//   const title = e.target.innerText
//   const currentBook = this.state.books.find(book => book.title === title)
//   console.log(currentBook)

//   this.setState({
//     currentBook: {
//       id: currentBook.id,
//       title: currentBook.title,
//       description: currentBook.description,
//       img_url: currentBook.img_url,
//       users: currentBook.users,
//       liked: false
//     }
//   }, ()=>console.log(this.state))
// }






// import React from 'react'

// export default function JournalList() {
//   return (
//     <div>
//       <h3>Journal Entries</h3>
//       {/* {user.journals.map((j, idx) => {return <div key={idx}>{j.title},</div>})} */}
//     </div>
//   )
// }

// class BookList extends Component { 
//   render() {
//     return (
//       <div>
//         <Menu vertical inverted>
//           {this.props.books.map((book) => 
//             <Menu.Item as={"a"} onClick={this.props.renderBook}>
//               {book.title}
//             </Menu.Item>, 
//           )}
//         </Menu>
//       </div>
//     );
//   }
// }