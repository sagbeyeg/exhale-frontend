import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Menu
} from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <menu horizontal class="ui nine item menu top-nav">
          {/* <Menu.Item>
            <video  autoplay loop muted playsinline src="./exhale-logo.mp4" style={{height:"1.1cm"}} />
          </Menu.Item>
          <Menu.Item><image src="./logo.png"></image></Menu.Item> */}
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
                Yoga
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
              <Menu.Item onClick={this.props.handleLogout}>
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