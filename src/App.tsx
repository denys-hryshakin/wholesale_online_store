import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
