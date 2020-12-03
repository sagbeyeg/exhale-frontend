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
            <div>
              <h1>{user.name}</h1>
              <p>{user.email_address}</p>
            </div>
        )
    }
}
