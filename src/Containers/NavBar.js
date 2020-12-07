import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Menu
} from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    console.log(this.props.loggedIn)
    return (
      <div>
        <menu horizontal class="ui eight item menu top-nav">
          <img height="50px" alt="exhale logo" src="./logo.png" />
            <Menu.Item as={NavLink} to="/" exact>
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/about" exact>
              About
            </Menu.Item>
            {this.props.loggedIn? 
            <>
              {/* <Menu.Item as={NavLink} to="/profile" exact>
                Profile
              </Menu.Item> */}
              <Menu.Item as={NavLink} to="/meditation" exact>
                Meditation
              </Menu.Item>
              <Menu.Item as={NavLink} to="/yoga" exact>
                Daily Yoga
              </Menu.Item>
                <Menu.Item as={NavLink} to="/music" exact>
                  Music
                </Menu.Item>
              <Menu.Item as={NavLink} to="/journals" exact>
                Journal Entries
              </Menu.Item>
              {/* <Menu.Item as={NavLink} to="/tasks" exact>
                Tasks
              </Menu.Item> */}
              <Menu.Item as={NavLink} to="/logout" onClick={this.props.handleLogout}>
                Logout
              </Menu.Item>
            </>
            :
            <Menu.Item as={NavLink} to="/login" exact>
              Login
            </Menu.Item>} 
        </menu>
        
      </div>
    )
  }
}

export default Navbar;