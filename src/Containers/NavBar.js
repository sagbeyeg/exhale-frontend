import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Menu, Dropdown
} from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.loggedIn?
              <menu horizontal class="ui seven item menu top-nav">
                  <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4FHZO7bx8oeB?theme=white"  width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </menu>
             :
             null} */}
        <menu horizontal class="ui seven item menu top-nav">
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
                Daily Yoga
              </Menu.Item>
              
                 {/* <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                  🎵Music🎵
                  </Dropdown.Toggle>
                  <Dropdown.Menu> */}
                <Menu.Item as={NavLink} to="/music" exact>
                  Music
                </Menu.Item>
                    {/* <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4FHZO7bx8oeB" width="100%" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text='🎵Music🎵' pointing='down' >
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/music" exact>
                      Music
                    </Dropdown.Item>
                    <Dropdown.Item>Sent Mail</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>  */}
              
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