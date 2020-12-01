import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
//   Route
} from 'react-router-dom'
// import NavBar from './Containers/NavBar'
import UserContainer from './Containers/UserContainer'

class App extends React.Component {

  state = {
    api: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/users")
    .then(resp => resp.json())
    .then(users => {
      this.setState({api: users}, () => console.log(this.state.api))
    })
    //.catch(alert("It didn't work... sorry!"))
  }

  render() {
    return (
      <Router>
        <div>
          <UserContainer api={this.state.api} />
          {/* <NavBar /> */}
          {/*<Route exact path="/" render={/*<Home />} /> */ }
          { /*<Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/> } /> */ }
        </div>
      </Router>
    );

  }
}

export default App;
