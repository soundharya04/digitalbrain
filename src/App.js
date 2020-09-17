import React from "react";
import Landing from "./Components/Landing";
import Registry from "./Components/Registry";
import Dashboard from "./Containers/Dashboard";
import Logout from "./Components/Logout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/registry" component={Registry}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/logout" component={Logout}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
