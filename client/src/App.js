import React, { useState } from "react";
import { Router } from "@reach/router";
import AllPolls from "./components/AllPolls";
import OnePoll from "./components/OnePoll";
import Login from "./components/Login";
import NewPoll from "./components/NewPoll";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <Router>
        <Login name={name} setName={setName} path="/" />
        <AllPolls name={name} setName={setName} path="/dashboard" />
        <OnePoll path="/poll/:id" />
        <NewPoll name={name} path="/create" />
      </Router>
    </div>
  );
}

export default App;
