import React, {useState} from 'react'
import './index.scss';
import Title from "../../components/title";

const ContactUs = () => {
    const [nameValue, setNameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const handleSubmit = (event) => {
        console.log(`L'utilisateur ${nameValue} qui possède l'adresse mail : ${mailValue} a envoyé le message suivant : ${messageValue}`);
        event.preventDefault();
    }
    return(
        <div>
            <Title title="Nous contacter" margin="50px"/>
            <div className="form" data-aos="fade-up">
                <form onSubmit={handleSubmit} className="form-object">
                    <div className="row">
                        <input type="text" placeholder="Nom" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
                        <input type="text" placeholder="Email" value={mailValue} onChange={(event) => setMailValue(event.target.value)}/>
                    </div>
                    <div className="row">
                        <textarea id="" cols="20" rows="5" placeholder="Message" value={messageValue} onChange={(event) => setMessageValue(event.target.value)}>
                        </textarea>
                    </div>
                    <div className="row">
                        <input type="submit" value="Envoyer" className="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;
