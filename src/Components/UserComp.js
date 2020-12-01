import React, { Component } from 'react'
import JournalList from '../Containers/JournalList'
import {
  Menu
} from "semantic-ui-react";

export default class UserComp extends Component {
  renderJournals = () => {
    <JournalList user={this.props.user}/>
  }

    render() {
      const { user } = this.props
        return (
            <div>
              <div>
                <Menu vertical inverted>
                    <Menu.Item as={"a"} onClick={this.renderJournals()}>
                      Journal
                    </Menu.Item>
                    <Menu.Item as={"a"} onClick={null}>
                      Task
                    </Menu.Item>,
                </Menu>
              </div>
                  <h1>{user.name}</h1>
                  <p>{user.email_address}</p>
              <h3>Tasks</h3>
                {/* {user.tasks.map((t,idx) => {render 
                  <li key={idx}>
                    <strong>{t.title}</strong>(<em>{t.status}</em>)-{t.content}
                  </li>
                })} */}
            </div>
        )
    }
}
