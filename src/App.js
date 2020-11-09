import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Selecteditem from './Components/Selecteditem';
import Checkout from './Components/Checkout';
import { createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/Selecteditem/:id">
            <Selecteditem />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;