import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  //Switch,
  Route
  //NavLink
} from "react-router-dom";
import LandingPage from '../src/components/LandingPage';
import classes from './App.css';
import About from './components/About';
import Schooling from './components/Schooling/Schooling';

//import Content from '../src/components/Content'
class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.App}>
          <Route path="/" exact render={
            () => {
              return (<LandingPage></LandingPage>);
            }
          } />
          <Route path="/about" exact strict render={
            () => {
              return (<h1>Welcome About</h1>);
            }
          } />
          <Layout>
            <About></About>
            <Schooling></Schooling>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </Layout>


        </div>
      </Router>
    );
  }
}

export default App;
