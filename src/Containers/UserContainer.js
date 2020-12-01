import React, { Component } from 'react'
import UserComp from '../Components/UserComp'

export default class UserContainer extends Component {
    render() {
        return (
            <div>
              {this.props.api.map((user, idx) => <UserComp key={idx} user={user} />)}
            </div>
        )
    }
}
