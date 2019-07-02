import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header.js";
import NotFound from "./Components/NotFound";
import Menu from "./Components/Menu.js";
import Location from "./Components/Location.js";
import About from "./Components/About.js";
import Hours from "./Components/Hours.js";
import Contact from "./Components/PhoneNumber.js";


export default () =>
  <Switch>
    <Route path="/" exact component={Header} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/location" exact component={Location} />
    <Route path="/rico" exact component={About} />
    <Route path="/hours" exact component={Hours} />
    <Route path="/contact" exact component={Contact} />

    <Route component={NotFound} />
  </Switch>;