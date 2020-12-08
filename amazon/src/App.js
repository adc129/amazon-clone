import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout.js';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Login from './components/Login.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
<         /Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
