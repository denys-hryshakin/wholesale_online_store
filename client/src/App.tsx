import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Home from './components/Home/Home'
import store from './redux/store'

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Provider store={store}>
          <HeaderContainer />
          <Home />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
