import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import BasicDetails from './components/basicDetails';
import LoginForm from './components/loginForm';
// import { HomePage } from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        
        <Routes>
          <Route path="/" element = {<LoginForm/>} />
          <Route path = '/details' element = {<BasicDetails/>} />
          {/* <Route path = '/home' element = {<HomePage/>} />  */}
        </Routes>
      </div>
    );
  }
}

export default App;
