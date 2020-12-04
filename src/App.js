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
import UserComp from './Components/UserComp'
import JournalList from './Containers/JournalList'
import TaskList from './Containers/TaskList'
import Music from './Components/Music'
import Yoga from './Components/Yoga'
//import SpotifyPlayer from 'react-spotify-player';

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
      status: 'Incomplete',
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
    
    fetch(`http://localhost:3000/api/v1/by_email/${this.state.email}`)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("user", data.user.id)
      this.handleLogin(data)
      //console.log(data.user)
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
      // let oldJournal = copiedArray.find(journal => Journal.id === newJournal.id)
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
      fetch(`http://localhost:3000/api/v1/journals/${j.target.id}`, { method: "DELETE" })
      // .then(resp => resp.json())
      .then()
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
    // console.log("Hi", )
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
        <div className="App">
          {/* <UserContainer api={this.state.api} /> */}
          <NavBar loggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/journals" render = {() => <JournalList journals = {this.state.journals} newJournal={this.state.newJournal} journalChangeHandler={this.journalChangeHandler} journalSubmitHandler={this.journalSubmitHandler} editSubmitHandler={this.editSubmitHandler} deleteJournal={this.deleteJournal}/>}  /> 
          <Route exact path="/tasks" render = {() => <TaskList tasks = {this.state.tasks} newTask={this.state.newTask} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />} />
          <Route exact path="/about" component={About}  />
          <Route exact path="/music" component={Music}  />
          <Route exact path="/yoga" component={Yoga}  />
          <Route exact path="/meditation" component={Meditation} />
          <Route exact path="/login" render={() => this.state.isLoggedIn? <Redirect to='/'/> : <Login loginClickHandler={this.loginClickHandler} loginSubmitHandler={this.loginSubmitHandler} />} />
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
