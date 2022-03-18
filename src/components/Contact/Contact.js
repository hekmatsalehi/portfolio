import React, { useRef, useState } from "react";
import { validateEmail } from "../../utils/validator";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export default function Contact() {
  const form = useRef();
  const [emailIsSent, setEmailIsSent] = useState(false);
  const [formState, setFormState] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    if (event.target.name === "sender_email") {
      const isValid = validateEmail(event.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
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
            setEmailIsSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="contact-me" id="contact-me">
      <div className="contact-container">
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="sender_name"
            defaultValue={formState.sender_name}
            onBlur={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Subject"
            name="sender_subject"
          ></input>
          <input
            type="text"
            placeholder="Email"
            name="sender_email"
            defaultValue={formState.sender_email}
            onBlur={handleChange}
          ></input>
          <textarea
            rows="5"
            placeholder="Message"
            name="message"
            defaultValue={formState.message}
            onBlur={handleChange}
          ></textarea>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button type="submit">Send</button>
          {emailIsSent && <span>Thank You, I will reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
