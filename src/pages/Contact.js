import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d14htwr",
        "template_cd45ygn",
        form.current,
        "TPr1yuj927cvTT8mF"
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
    <div className="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="box-container">
            <div className="box-un">
              <div>
                <label>
                  <FaUserAlt className="colorContactIcon" />
                  Nom et prenom:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom et prénom"
                  required={true}
                />
              </div>

              <div className="email">
                <label className="email">
                  <MdAlternateEmail className="colorContactIcon" />
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                />
              </div>
            </div>
            <div className="message-box">
              <label>
                <div>
                  <IoMdMail className="colorContactIcon" />
                </div>
                <div>Message:</div>
              </label>
              <textarea
                name="message"
                placeholder="Message..."
                required={true}
              />
            </div>
          </div>
          <div className="submit">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
