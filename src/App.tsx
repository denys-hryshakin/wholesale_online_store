import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Home />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
