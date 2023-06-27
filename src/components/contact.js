import React, { useState } from 'react';
import { validateAndFormatEmail } from '../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateAndFormatEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        } else {
            setErrorMessage('');
        }
        console.log(formState);
        // setFormState({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`);
        } else {
            setErrorMessage('');
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
            console.log(formState);
        }
    };

    return(
        <div className='contact-container'>
            <h2>Contact Me</h2>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input 
                        type="email"
                        name="email"
                        defaultValue={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        defaultValue={message}
                        onChange={handleChange}
                    />
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;