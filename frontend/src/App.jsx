import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./pages/BarNav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DesignPage from "../src/pages/design/Design";
import AboutPage from "../src/pages/about/About";
import Colors from "./pages/design/Colors";

export default () => {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: Colors.BACKGROUND_COLOR }}>
        <Navigation />
        <Switch>
          <Route path="/design">
            <DesignPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="">
            <Redirect to="/design" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
