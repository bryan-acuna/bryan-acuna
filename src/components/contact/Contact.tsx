import "./Contact.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";

export const contacts = [
  {
    icon: MdOutlineEmail,
    title: "Email",
    info: "bacuna@uh.edu",
    contact: "Send a message",
  },
  {
    icon: RiMessengerLine,
    title: "Messenger",
    info: "bacuna@uh.edu",
    contact: "Send a message",
  },
  {
    icon: BsWhatsapp,
    title: "WhatsApp",
    info: "+123456789",
    contact: "Send a message",
  },
];

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n71ripe",
        "template_c1xnt4a",
        e.target,
        "ivfIAcQLhtEvhKTy7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contacts__container">
        <div className="contacts__options">
          {contacts.map((contact) => (
            <article className="contacts__option">
              {<contact.icon className="contacts__option-icon" />}
              <h4>{contact.title}</h4>
              <h5>{contact.info}</h5>
              <a href={`mailto:${contact.info}`}>{contact.contact}</a>
            </article>
          ))}
        </div>
        <form onSubmit={sendEmail}>
          <input name="name" type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
