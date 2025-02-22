
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
     <Router>
      <div>
        <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/user/:id" element={<UserDetails />} />
  </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
