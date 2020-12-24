import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Footer } from "antd/lib/layout/layout";
import About from "./components/About";

let isLoggin:boolean=false;
ReactDOM.render(
  <React.StrictMode>
    <Router>
     
      <Switch>
        <Route exact path="/">
          <App varry={isLoggin} />
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
