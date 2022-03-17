import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

export default function Contact() {
  const form = useRef();
  const [ emailIsSent, setEmailIsSent ] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_n58a7ol",
        "template_2ktlgrn",
        form.current,
        "gwgBQq0LJ6h3tVkpq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailIsSent(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-me" id="contact-me">
      <div className="left"></div>
      <div className="contact-container">
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="sender_name"></input>
          <input
            type="text"
            placeholder="Subject"
            name="sender_subject"
          ></input>
          <input type="text" placeholder="Email" name="sender_email"></input>
          <textarea rows="5" placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          <span>{emailIsSent ? 'Thank You, I will reply ASAP': ''}</span>
        </form>
      </div>
    </div>
  );
}
