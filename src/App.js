import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';

import Header from './common/header/Header'
import Menu from './menu/Menu'
import Home from './home/Home'
// import CarTable from './datatable/CarTable'

class App extends Component {
  constructor() {
      super();
      this.state = {
        activeMenuItem: <Home/>
      };
      this.changeMenu = this.changeMenu.bind(this);
  }
  changeMenu(e) {
    this.setState({activeMenuItem: e});
  }
  render() {
    return (
      <div className="App">
        <Header className="Baml-header"/>
        <Menu changeMenu={this.changeMenu}/>
        {this.state.activeMenuItem}

      </div>
    );
  }
}

export default App;
