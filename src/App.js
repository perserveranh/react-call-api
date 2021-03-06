import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="padding-top" />
        
          {this.showContentMenus(routes)}
        </div>
      </Router>
    );
  }
}

export default App;
