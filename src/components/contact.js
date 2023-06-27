import React, { useState } from 'react';
import { validateAndFormatEmail } from '../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
    }

}