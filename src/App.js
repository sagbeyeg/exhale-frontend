import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './Components/Home'
import Meditation from './Components/Meditation'
import About from './Components/About'
import Login from './Components/Login'
import NavBar from './Containers/NavBar'
// import UserComp from './Components/UserComp'
import JournalList from './Containers/JournalList'
import TaskList from './Containers/TaskList'
import Music from './Components/Music'
import Yoga from './Components/Yoga'

class App extends React.Component {

  state = {
    email: '',
    password: '',
    user: {},
    tasks: '',
    journals: '',
    isLoggedIn: true,
    // inclusiveUserData: [],
    newTask: {
      title: '',
      status: 'Incomplete',
      content: ''
    },
    newJournal: {
      title: '',
      date: '',
      entry: ''
    }
  }


  componentDidMount = () => {
    if (localStorage.user_id) {
      fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`) 
        .then(resp => resp.json())
        .then(userObj => this.setState({user: userObj, loggedIn: true, journals: userObj.journals, tasks: userObj.tasks}))
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
    
    fetch(`http://localhost:3000/api/v1/by_email/${this.state.email}`)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("user_id", data.user.id)
      this.handleLogin(data)
    })
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
      tasks: data.user.tasks,
      journals: data.user.journals
    })
    
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
      email: '',
      password: ''
    })
    localStorage.clear();
    return <Redirect to='/login'/>
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
        this.setState({
          tasks: this.state.tasks.prepend (newObj.task),
          newTask: {
            title: '',
            status: 'incomplete',
            content: ''
          }
        })

      })
  }

  editSubmitHandler = (e) => {

    fetch(`http://localhost:3000/api/v1/journals/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ 
        title: e.target.title.value,
        entry: e.target.entry.value,
        date: e.target.date.value 
       })
    })
    .then(resp => resp.json())
    .then(newJournal => {
      let copiedArray = [...this.state.journals]
      let idx = copiedArray.findIndex(journal => journal.id === newJournal.id)
      copiedArray[idx] = newJournal;
      this.setState({ journals: copiedArray });
      console.log(newJournal)
    })
    .catch(console.log)
  };
  


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
  
  deleteJournal = (j) => {
    console.log(j.target.id)
    console.log(this.state.journals)
    let copiedArray = this.state.journals
    let idx = copiedArray.findIndex(journal => journal.id == j.target.id)
    // console.log(idx)
    copiedArray[idx] = {};
    this.setState({ journals: copiedArray });
    console.log(this.state.journals)

    fetch(`http://localhost:3000/api/v1/journals/${j.target.id}`, { method: "DELETE" })
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
    fetch('http://localhost:3000/api/v1/journals', configObj)
      .then(resp =>resp.json())
      .then(newObj => {
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
        <div className="App">
          {/* <UserContainer api={this.state.api} /> */}
          <NavBar loggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/journals" render = {() => this.state.isLoggedIn? <JournalList journals = {this.state.journals} newJournal={this.state.newJournal} journalChangeHandler={this.journalChangeHandler} journalSubmitHandler={this.journalSubmitHandler} editSubmitHandler={this.editSubmitHandler} deleteJournal={this.deleteJournal}/> : <Redirect to='/login'/> }  /> 
          <Route exact path="/tasks" render = {() => this.state.isLoggedIn? <TaskList tasks = {this.state.tasks} newTask={this.state.newTask} changeHandler={this.changeHandler} submitHandler={this.submitHandler} /> : <Redirect to='/login'/>} />
          <Route exact path="/about" component={About}  />
          <Route exact path="/music" render = {() => this.state.isLoggedIn? <Music/> : <Redirect to='/login'/>}  />
          <Route exact path="/yoga" render = {() => this.state.isLoggedIn? <Yoga/> : <Redirect to='/login'/>}  />
          <Route exact path="/meditation" render = {() => this.state.isLoggedIn? <Meditation/> : <Redirect to='/login'/>} />
          <Route exact path="/login" render={() => this.state.isLoggedIn? <Redirect to='/'/> : <Login loginClickHandler={this.loginClickHandler} loginSubmitHandler={this.loginSubmitHandler} />} />
          <Route exact path="/logout" render={() => <Redirect to='/login' />} />
          {/* {this.state.isLoggedIn?
          <div>
          <Route exact path="/profile" render={() => <UserComp user={this.state.user} /> } />
          </div>
          : 
          <Redirect to='/login'/> 
          } */}
        </div>
      </Router>
    );

  }
}

export default App;
