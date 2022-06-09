import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Email = () => {

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
    return (
        <section className='mx-auto w-50' id='contact'>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}

            <form className='w-100' ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Name</label>
                    <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Email</label>
                    <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Subject</label>
                    <input type="text" name="subject" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">message</label>
                    {/* <textarea name="message" /> */}
                    <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <input className='btn hover:translate-x-3 hover:bg-emerald-800' type="submit" value="Send" />
            </form>

        </section>
    );
};

export default Email;