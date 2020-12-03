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
    tasks: '',
    journals: '',
    isLoggedIn: false,
    inclusiveUserData: [],
    newTask: {
      title: '',
      status: 'incomplete',
      content: ''
    },
    newJournal: {
      title: '',
      date: '',
      entry: ''
    }
  }
  // fetchUser =() => {
  //   fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({inclusiveUserData: data})); 
  // }



  // componentDidMount = () => {
  //   const token = localStorage.getItem("token")
  //   console.log(token)
    
  //   if (token) {
  //     fetch('http://localhost:3000/api/v1/profile', {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}`}
  //     })
  //     .then(resp=> resp.json())
  //     .then(data => {
  //       console.log(data.user)
  //       if (data.user) this.setState({isLoggedIn: true, user: data.user})
  //       // this.fetchUser()
  //     })

  //   } else {
  //     this.handleLogout();
  //   }
  // }

  loginClickHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, 
    // () => console.log(this.state.email, this.state.password)
    )
  }

  loginSubmitHandler = () => {
    // const configObj = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accepts": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email_address: this.state.email,
    //     password: this.state.password
    //   })
    // }

    fetch(`http://localhost:3000/api/v1/by_email/${this.state.email}`)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("user", data.user.id)
      this.handleLogin(data)
      console.log(data.user)
    })
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
      tasks: data.user.tasks,
      journals: data.user.journals
    })
    return <Redirect to='/profile'/>
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
      email: '',
      password: ''
    })
    localStorage.clear();
  }

  submitHandler = () => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: this.state.newTask.title,
        status: this.state.newTask.status,
        content: this.state.newTask.content,
        user_id: this.state.user.id
      })
    }
    console.log("Hi", )
    fetch('http://localhost:3000/api/v1/tasks', configObj)
      .then(resp =>resp.json())
      .then(newObj => {
        // const newArray = ({...this.state.tasks, newObj})
        // console.log(newArray)
        this.setState({
          tasks: [...this.state.tasks, newObj.task],
          newTask: {
            title: '',
            status: 'incomplete',
            content: ''
          }
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

  journalChangeHandler = (e) => {
    this.setState({
      newJournal: {
        ...this.state.newJournal, [ e.target.name ]: e.target.value,
      }
    })
  }
  
  journalSubmitHandler = () => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: this.state.newJournal.title,
        date: this.state.newJournal.date,
        entry: this.state.newJournal.entry,
        user_id: this.state.user.id
      })
    }
    console.log("Hi", )
    fetch('http://localhost:3000/api/v1/journals', configObj)
      .then(resp =>resp.json())
      .then(newObj => {
        // const newArray = ({...this.state.tasks, newObj})
        // console.log(newArray)
        this.setState({
          journals: [...this.state.journals, newObj.journal],
          newJournal: {
            title: '',
            date: '',
            entry: ''
          }
        })

      })
  }
  
  render() {
    console.log(this.state)
    return (
      <Router>
        <div class="App">
          {/* <UserContainer api={this.state.api} /> */}
          <NavBar loggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/journals" render = {() => <JournalList journals = {this.state.journals} newJournal={this.state.newJournal} journalChangeHandler={this.journalChangeHandler} journalSubmitHandler={this.journalSubmitHandler} />} />
          <Route exact path="/tasks" render = {() => <TaskList tasks = {this.state.tasks} newTask={this.state.newTask} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />} />
          <Route exact path="/about" component={About}  />
          <Route exact path="/login" render={() => this.state.isLoggedIn? <Redirect to='/profile'/> : <Login loginClickHandler={this.loginClickHandler} loginSubmitHandler={this.loginSubmitHandler} />} />
          {this.state.isLoggedIn?
          <div>
          <Route exact path="/profile" render={() => <UserComp user={this.state.user} /> } />
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
