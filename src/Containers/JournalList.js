import React, { Component } from 'react'
import Journal from '../Components/Journal' 
import { Menu } from 'semantic-ui-react'

export default class JournalList extends Component {
  state = {
    currentJournal: []
  }
  renderEntries= (e) => {
    const title = e.target.innerText
    const journal = this.props.user.journals.find(journal => journal.title === title)
    this.setState({currentJournal: journal}, () => console.log(this.state.currentJournal))
    // return <Journal journal = {journal} key = {journal.id}/>
  }


  render() {
    return (
      <div className ="journal-list">
          <h3>Journal Entries</h3>
        <Menu vertical inverted>
            {this.props.user? this.props.user.journals.map(journal =>
              <Menu.Item key={journal.id} onClick={this.renderEntries}>
                {journal.title}
              </Menu.Item> 
            ) : null }
        </Menu>
        <Journal journal = {this.state.currentJournal} key = {this.state.currentJournal.id}/>
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