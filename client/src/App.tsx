import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import store from "./redux/store";
import Catalog from "./components/Catalog/Catalog";
import Brands from "./components/Brands/Brands";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Delivery from "./components/Delivery/Delivery";
import ShoppingCart from "./components/Header/ShoppingCart/ShoppingCart";
import Profile from "./components/Header/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <div className="app-wrapper-content">
            <Route path="/home" component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/brands" component={Brands} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/about" component={About} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/profile" component={Profile} />
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
