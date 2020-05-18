import React, {useState} from 'react'
import './index.scss';
import Title from "../../components/title";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const [nameValue, setNameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            toast.success('Votre message a bien été envoyé ! 😍', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    const handleSubmit = (event) => {
        const templateId= 'template_buMkQwFy';
        sendFeedback(templateId, {message_html: messageValue, from_name: nameValue, reply_to: mailValue})
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}

export default ContactUs;
