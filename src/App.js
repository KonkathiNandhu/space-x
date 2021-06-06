import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Launchlist from "./Lauchlist/Launchlist";
import LaunchView from "./Components/LaunchView/LaunchView";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/launches/:flight_number">
            <LaunchView />
          </Route>
          <Route path="/" exact>
            <Launchlist/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;