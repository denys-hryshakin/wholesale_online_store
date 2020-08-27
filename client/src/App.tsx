import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
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
          <div className="max-width">
            <div className="app-wrapper-content">
              <Route path="/home" component={Home} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
