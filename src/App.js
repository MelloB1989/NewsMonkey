import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Help from './components/Help';

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
     <BrowserRouter>
     <Navbar toggleMode={toggleMode} mode={this.state.mode}/>
     <div className="container">
      <Routes>
      <Route path="/" element={<News mode={this.state.mode} category="in" title=" - Top Headlines IN"/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/politics" element={<News mode={this.props.mode} category="us" title=" - Top Headlines US"/>}/>
      </Routes>
     </div>
     </BrowserRouter>
     </>
    )
  }
}
