import React, { Component } from 'react'
import './App.scss';
import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    )
  }
}


export default App;
