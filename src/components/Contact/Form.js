


import React, { useRef } from 'react';
import './Form.css';
import emailjs from 'emailjs-com';

const Form = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_wf1pdrf', form.current, 'Um7XIy1EouHIO_8YI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return <form className='form' ref={form} onSubmit={sendEmail}>
        <div className="form_input">
            <input type="text" name="name" id="" placeholder='Your Name' />
        </div>
        <div className="form_input">
            <input type="email" name="email" id="" placeholder='Your Email' />
        </div>
        <div className="form_input">
            <input type="text" name="subject" id="" placeholder='Subject' />
        </div>
        <div className="form_input">
            <textarea name="message" placeholder='Write Message'></textarea>
        </div>
        <button className="submit_btn" type='submit'>
            Submit
        </button>
    </form>
};

export default Form;