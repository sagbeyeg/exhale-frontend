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
    inclusiveUserData: [],
    newTask: {
      title: '',
      status: 'incomplete',
      content: ''
    }
  }
  fetchUser =() => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({inclusiveUserData: data})); 
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
        console.log(data.user)
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
    localStorage.clear();
    // <Redirect to='/login'/>
    // this.props.history.push(`/login`)
  }

  submitHandler = () => {
    console.log("Hi", )
    fetch('http://localhost:3000/api/v1/tasks', {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: this.state.newTask.title,
        status: this.state.newTask.status,
        content: this.state.newTask.content
      })
      .then(resp =>resp.json())
      .then(newObj => {
        const newArray = ({...this.state.inclusiveUserData, tasks:[...this.state.inclusiveUserData.tasks, newObj]})
        console.log(newArray)
        // this.setState({inclusiveUserData: [...this.state.inclusiveUserData.tasks, newObj] })
      })
    })
  }

  changeHandler = (e) => {
    this.setState({
      newTask: {
        ...this.state.newTask, [ e.target.name ]: e.target.value,
      }
    })
  }
  
  
  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          {/* <UserContainer api={this.state.api} /> */}
          <NavBar loggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/journals" render = {() => <JournalList user = {this.state.inclusiveUserData}  />} />
          <Route exact path="/tasks" render = {() => <TaskList user = {this.state.inclusiveUserData} newTask={this.state.newTask} changeHandler={this.changeHandler}/>} submitHandler={this.submitHandler} />
          <Route exact path="/about" component={About}  />
          <Route exact path="/login" render={() => this.state.isLoggedIn? <Redirect to='/profile'/> : <Login loginClickHandler={this.loginClickHandler} loginSubmitHandler={this.loginSubmitHandler} />} />
          {this.state.isLoggedIn?
          <div>
          <Route exact path="/profile" render={() => <UserComp user={this.state.inclusiveUserData} /> } />
          </div>
          : 
          <Redirect to='/login'/> 
          }
        </div>
      </Router>
    );

  }
}

export default App;
