import React, { Component } from 'react'
import './App.scss';
import Header from './Component/Header/Header';
import Dashboard from './Layout/Dashboard/Dashboard';
import Pokemon from './Layout/Pokemon/Pokemon';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Dashboard /> */}
        <Pokemon />
      </div>
    )
  }
}


export default App;
