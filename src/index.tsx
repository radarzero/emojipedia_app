import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Footer } from "antd/lib/layout/layout";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="topnav">
        <NavLink exact to="/home">
          Home
        </NavLink>
        <NavLink exact to="/about">
          About-US
        </NavLink>
        <NavLink exact to="/contact">
          Contact-US
        </NavLink>
        <NavLink exact to="/">
          Login
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer style={{ textAlign: "center" }}>
        TechON ©2020 Created by RawHeat
      </Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
