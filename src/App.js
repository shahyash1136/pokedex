import React, { Component } from 'react'
import './App.scss';
import Header from './Component/Header/Header';
import Dashboard from './Layout/Dashboard/Dashboard';
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
