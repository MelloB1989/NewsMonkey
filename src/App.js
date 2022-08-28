import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
    };
  }

  render() {
    const toggleMode = ()=>{
      if (this.state.mode === 'light'){
        //setMode('dark');
        this.setState({ mode: 'dark' })
        document.body.style.backgroundColor = '#212529';
      }
      else {
        //setMode('light');
        this.setState({ mode: 'light' })
        document.body.style.backgroundColor = 'white';
      }
    };
  
    return (
      <>
     <Navbar toggleMode={toggleMode} mode={this.state.mode}/>
     <div className="container">
      <News mode={this.state.mode}/>
     </div>
     </>
    )
  }
}
