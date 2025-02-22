import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "./../styles/App.css";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/user/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

