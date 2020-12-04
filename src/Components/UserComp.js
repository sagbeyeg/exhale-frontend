import React, { Component } from 'react'
// import JournalList from '../Containers/JournalList'


export default class UserComp extends Component {
  // renderJournals = () => {
  //   console.log("Render Journals")
  //   return <Route exact path="/journal" render = {() => <JournalList user = {this.state.user}  /> } />
  // }

    render() {
      const { user } = this.props
        return (
            <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
              <h1>{user.name}</h1>
              <p>Email Address: {user.email_address}</p>
            </div>
        )
    }
}
