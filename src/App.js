import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'
import Users from './Users'

import Header from './Header'
import Banner from './Banner'
import Menu from './Menu'
import Footer from './Footer'
import Register from './Register'
import Login from './Login'
import MyBooks from './MyBooks'
import Library from './Library'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

/*
  Home Page
  Register Page
  Login
  My Books page
*/

const HomePage=()=>{
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Banner/>
      <Library/>
      <Footer/>
    </div>
  )
}

const RegisterPage=()=>{
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Register/>
      <Footer/>
    </div>
  )
}

const LoginPage=()=>{
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Login/>
      <Footer/>
    </div>
  )
}

const MyBooksPage=()=>{
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <MyBooks/>
      <Footer/>
    </div>
  )
}

const PageNotFoundPage=()=>{
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <h1>Sorry.. Page you reached does not exists</h1>
      <Footer/>
    </div>
    
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/mybooks" component={MyBooksPage}/>
          <Route path="*" component={PageNotFoundPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
