'use client'

import React, { useRef, FormEvent } from 'react';
import emailjs from 'emailjs-com';

const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_zb4kqyx', 'template_0efmt68', e.currentTarget, '_zSus4t4q9DvcJC4N')
            .then((result: any) => {
                console.log(result.text)
            }, (error: any) => {
                console.log(error.text)
            });
    };

    // const submitClick = (e: any) => {
    //     e
    // }

    return (
        <form onSubmit={sendEmail}
            className="border-b-2 border-black pb-4 flex flex-col" > 
            <h2>Send me an email:</h2>
            <div className="p-2 flex flex-col">
                <label htmlFor="email">Your Email:</label>
                <input type="email" 
                        name="in_email" 
                        id="email" 
                        placeholder="Your email here..."
                        className="w-[280px] border-black border-2 p-1 rounded"
                        required={true} />
            </div>
            <div className="p-2 flex flex-col">
                <label htmlFor="message">Message:</label>
                <textarea
                        name="message" 
                        id="message" 
                        rows={10}
                        placeholder="Your message here..."
                        className="border-black border-2 p-1 rounded" 
                        required={true} />
            </div>
            <input className="border-2 border-black rounded bg-white ml-2 w-20 self-center hover:bg-gray-500"
                type="submit"
                value="Send"
                // onClick={submitClick}
                />
        </form>
    )
  }

export default EmailContactForm;