import React from 'react';
import './App.scss';
import NavBar from "./components/navbar";
import History from "./screens/history";
import Home from "./screens/home";
import Discover from "./screens/discover";
import FindUs from "./screens/findUs";

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

            <div id="Nous découvrir">
                <Discover/>
            </div>

            <div id="Nous retrouver">
                <FindUs/>
            </div>
        </div>
    );
}

export default App;
