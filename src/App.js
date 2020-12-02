import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import NavBar from './Containers/NavBar'
import UserComp from './Components/UserComp'
import JournalList from './Containers/JournalList'
import TaskList from './Containers/TaskList'
//import CreateJournalForm from './Components/CreateJournalForm'

class App extends React.Component {

  state = {
    email: '',
    password: '',
    user: {},
    isLoggedIn: false,
    api: []
  }
  fetchUser =() => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({api: data})); 
  }



  componentDidMount = () => {
    const token = localStorage.getItem("token")
    console.log(token)
    
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(resp=> resp.json())
      .then(data => {
        this.setState({isLoggedIn: true, user: data.user})
        this.fetchUser()
      })

    } else {
      this.handleLogout();
    }
  }

  loginClickHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, 
    // () => console.log(this.state.email, this.state.password)
    )
  }

  loginSubmitHandler = () => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email_address: this.state.email,
        password: this.state.password
      })
    }

    fetch("http://localhost:3000/api/v1/login", configObj)
    .then(resp => resp.json())
    .then(user => {
      localStorage.setItem("token", user.jwt)
      this.handleLogin(user)
    })
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
    return <Redirect to='/profile'/>
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
    localStorage.removeItem("token");
    // <Redirect to='/login'/>
    // this.props.history.push(`/login`)
  }

  renderUser = () => {
  }
  
  
  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          {/* <UserContainer api={this.state.api} /> */}
          <NavBar loggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/journals" render = {() => <JournalList user = {this.state.api}  />} />
          <Route exact path="/tasks" render = {() => <TaskList user = {this.state.api}  />} />
          <Route exact path="/about" component={About}  />
          <Route exact path="/login" render={() => this.state.isLoggedIn? <Redirect to='/profile'/> : <Login loginClickHandler={this.loginClickHandler} loginSubmitHandler={this.loginSubmitHandler} />} />
          {this.state.isLoggedIn?
          <div>
          <Route exact path="/profile" render={() => <UserComp user={this.state.api} /> } />
            {/* <button onClick={this.renderUser}>Profile</button> */}
            {/* <Route exact path="/about" component={About}  /> */}
          </div>
          : <Redirect to='/login'/> }
          {/*<Route exact path="/" render={/*<Home />} /> */ }
          { /*<Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/> } /> */ }
        </div>
      </Router>
    );

  }
}

export default App;
