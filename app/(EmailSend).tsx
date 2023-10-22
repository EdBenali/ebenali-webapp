'use client'

import React, { useRef, FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

const EmailContactForm = () => {
    const form = useRef();

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [button, setButton] = useState('Send');

    const handleEmailSet = (e:any) => {
        setEmail(e.target.value)
    }

    const handleMessageSet = (e:any) => {
        setMessage(e.target.value)
    }


    const handleButtonSet = (e:any) => {
        setButton(e.target.value)
    }

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_zb4kqyx', 'template_0efmt68', e.currentTarget, '_zSus4t4q9DvcJC4N')
            .then(
            async (result: any) => {
                console.log(result.text)
                setEmail("")
                setMessage("")
                setButton("Sent!")
                await timeout(3000)
                setButton("Send")
            }, 
            (error: any) => {
                console.log(error.text)
            });
    };


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
                        required={true} 
                        onChange={handleEmailSet}
                        value={email}/>
            </div>
            <div className="p-2 flex flex-col">
                <label htmlFor="message">Message:</label>
                <textarea
                        name="message" 
                        id="message" 
                        rows={10}
                        placeholder="Your message here..."
                        className="border-black border-2 p-1 rounded" 
                        required={true} 
                        onChange={handleMessageSet}
                        value={message}
                        />
            </div>
            <input 
                id="EmailSubmit"
                className="border-2 border-black rounded bg-white ml-2 w-20 self-center cursor-pointer success-pulse"
                type="submit"
                onChange={handleButtonSet}
                value={button}/>
        </form>
    )
}

export default EmailContactForm;