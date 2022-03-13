import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddListItem from "./components/add-listItem.component";
import ListItem from "./components/listItem.component";
import ListItemsList from "./components/listItems-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/listItems"} className="navbar-brand">
            Grocery List
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/listItems"} className="nav-link">
                List Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

<div className="container mt-3">
<div className="main"></div>
<div className="sub"></div>
  <Switch>
    <Route exact path={["/", "/listItems"]} component={ListItemsList} />
    <Route exact path="/add" component={AddListItem} />
    <Route path="/listItems/:id" component={ListItem} />
  </Switch>
</div>
      </div>
    );
  }
}

export default App;
