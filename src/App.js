import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
