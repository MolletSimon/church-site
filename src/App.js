import React from 'react';
import './App.scss';
import NavBar from "./components/navbar";
import History from "./screens/history";
import Home from "./screens/home";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <div id="Accueil">
          <Home/>
      </div>

      <div id="Notre histoire">
        <History/>
      </div>
    </div>
  );
}

export default App;
