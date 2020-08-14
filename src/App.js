import React from "react";
import { Header } from "./components/header";
import { ToBeCompleted } from "./components/ToBeCompleted";
import { Completed } from "./components/Completed.js";
import { AddDream } from "./components/AddDream";
import { NewGlobalProvider } from "./context/NewGlobalState";
import "./App.css";

function App() {
  return (
    <NewGlobalProvider>
      <Header />
      <div className="container">
        <ToBeCompleted />
        <Completed />
        <AddDream />
      </div>
    </NewGlobalProvider>
  );
}

export default App;
