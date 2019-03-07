/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students. *
* Name: Mohammed Suleiman Mohamed Al-falahy Student ID: 121083174 Date: February 19, 2019
* ********************************************************************************/


import React, { Component } from 'react';
import Overview from './Overview';
import Projects from './Projects';
import { Route, Switch } from 'react-router-dom';
import Teams from './Teams';
import Employee from './Employees';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return(
      <Switch>
      <Route exact path='/' render={() => (
         <Overview/>
      )}/>
      <Route exact path='/projects' render={() => (
        <Projects/>
    )}/>
      <Route exact path='/teams' render={() => (
        <Teams/>
    )}/>
      <Route exact path='/employees' render={() => (
        <Employee/>
    )}/>
     <Route render={() => (
        <NotFound/>
    )}/>
      </Switch>
    );
   
  }
}

export default App;