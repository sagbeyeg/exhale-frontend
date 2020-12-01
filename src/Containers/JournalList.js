import React from 'react'

export default function JournalList() {
  return (
    <div>
      <h3>Journal Entries</h3>
      {/* {user.journals.map((j, idx) => {return <div key={idx}>{j.title},</div>})} */}
    </div>
  )
}

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