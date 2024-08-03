'use client'
import React, { useState } from 'react'
import "./ContactStyle.css"
// import emailjs from '@emailjs/browser'
import { useRef } from 'react'
// import { themeContext } from '../../Context';
import { useContext } from 'react'

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        user_email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        }));
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lbmbd2g', 'template_wtm1qga', form.current, 'PDCldZZvgMDAkSVtE')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            setFormData({
                username: '',
                user_email: '',
                message: '',
              });
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className='contact-form' id='contact'>
        <div className="c-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact us</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type='text' 
                    name='username' 
                    className='user' 
                    placeholder='Name'
                    value={formData.username}
                    onChange={handleChange}
                 />
                <input
                    type='email' 
                    name='user_email' 
                    className='user' 
                    placeholder='Email'
                    value={formData.user_email}
                    onChange={handleChange}
                />
                <textarea 
                    name='message' 
                    className='user' 
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                />
                <input type='submit' value='Send' className='button'/>
                <span>{done && "Thanks for contacting us!"}</span>
                <div className="blur c-blur1" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
