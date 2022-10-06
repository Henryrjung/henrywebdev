import React from 'react'
import { useState } from 'react'
import './Contact.scss'

export default function Contact() {
  const [status, setStatus] = useState('submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className='contact'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <div>
          <label className='label' htmlFor="name">Name</label>
          <input className='input1' type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className='input1' type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea className='input2' id="message" required />
        </div>
        <button className='button' type="submit">{status}</button>
      </form>
    </div>
  )
}
