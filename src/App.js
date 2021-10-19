import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render(){

      return(
           <BrowserRouter>
              <Main/>
           </BrowserRouter>

      );
  }
}

export default App;
