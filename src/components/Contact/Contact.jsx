import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thb0hb8",
        "template_fhrgxx9",
        form.current,
        "ookIRHGVfQxFx1It3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>ahmedabdelmenam534@gmail.com</h5>
            <a
              href="mailto:ahmedabdelmenam534@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Ahmed Abdelmenam</h5>
            <a href="https://m.me/aalmenam" rel="noreferrer" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineMail className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>+20114559528</h5>
            <a
              href="https://api.whatsapp.com/send?phone+201145559528"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send massege
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
