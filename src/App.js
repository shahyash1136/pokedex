import React, { Component } from 'react'
import Header from './Component/Header/Header';
import Dashboard from './Layout/Dashboard/Dashboard';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    )
  }
}


export default App;
