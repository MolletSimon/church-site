import React, {useCallback, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import NavBar from "./components/navbar";
import History from "./screens/history";
import Home from "./screens/home";
import Discover from "./screens/discover";
import FindUs from "./screens/findUs";
import ContactUs from "./screens/contactUs";
import Informations from "./screens/informations";

function App() {
    const componentWillMount = useCallback(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-in'
        });
    }, []);

    useEffect(() => {
        componentWillMount();
    }, [])

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

            <div id="Nous contacter">
                <ContactUs/>
            </div>

            <div id="Informations">
                <Informations/>
            </div>
        </div>
    );
}

export default App;
