import React from 'react'
import { useState } from 'react'
import './Contact.scss'

export default function Contact() {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: ""
  })

  function handleChange(e) {
    setMail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mail });
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mail }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMail({
          email: "",
          name: "",
          message: "",
        });
      });
  };
  return (
    <div className='contact'>
      <form className='form' onSubmit={submitEmail}>
        <h1>Contact</h1>
        <div>
          <label className='label' htmlFor="name">Name</label>
          <input className='input1' type="text" onChange={handleChange} name="name" value={mail.name} id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className='input1' type="email" onChange={handleChange} name="email" value={mail.email} id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea className='input2'  onChange={handleChange} name="message" value={mail.message} id="message" required />
        </div>
        <button className='button'>Send</button>
      </form>
    </div>
  )
}
