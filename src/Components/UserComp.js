import React, { Component } from 'react'
// import JournalList from '../Containers/JournalList'


export default class UserComp extends Component {

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
