import React, {useState} from "react";
import "./index.scss";
import Button from "../button";

const NavBar = () => {
    const [active, setActive] = useState(false)
    return(
        <div className="nav-bar">
            <div className="nav-bar-content">
                <Button label="Accueil" active={true} setActive={setActive}/>
                <Button label="Notre histoire" active={active} setActive={setActive}/>
                <Button label="Nous découvrir" active={active} setActive={setActive}/>
                <Button label="Nous retrouver" active={active} setActive={setActive}/>
                <Button label="Nous contacter" active={active} setActive={setActive}/>
                <Button label="Informations" active={active} setActive={setActive}/>
            </div>
        </div>
    )
}

export default NavBar;
