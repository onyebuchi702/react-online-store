import React, { Component } from 'react';
import Router from './Router'
import { NavLink } from 'react-router-dom'

// import './App.css';

const Navigation = (props) => <nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
      <br/>
      <NavLink to="/cart">Cart</NavLink>
    </li>
  </ul>
</nav>

class App extends  Component {
  render() {
    return (
      <div className="page-container">
        <Navigation/>
        <Router/>
      </div>
    );
  }
}

export default App;
