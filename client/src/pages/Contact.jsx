import React from 'react'
import { useState } from 'react'
import './Contact.scss'
import Send from '../components/send/Send'

export default function Contact() {
  const URL = window.location.href;
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [clicked, setClicked] = useState(false);

  function handleChange(e) {
    setMail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mail });
    const response = await fetch("https://henrywebdevapp.herokuapp.com/send", {
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
          // alert("Message Sent");
          var el  = document.getElementById('button');
          el.textContent = 'Sent';
          setClicked(true)
        } else if (resData.status === "fail") {
          // alert("Message failed to send");
          var elFail  = document.getElementById('button');
          elFail.textContent = 'retry';
          setClicked(false);
        }
      })
      .then(() => {
        setMail({
          email: "",
          name: "",
          message: "",
        })
          const getButton = document.querySelector('button');
          getButton.innerHTML = `<Send />`
      })
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
        {clicked ? <Send /> : <button className='button' id='button'>Send</button>}
        
      </form>
    </div>
  )
}
