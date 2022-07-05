import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Context } from "../../context/Context";
import { useContext } from "react";
import useEmailValidate from "../../hooks/useEmailValidate";

export default function Contact() {
  const {
    container,
    form,
    input,
    label,
    button,
    main,
    box,
    textBox,
    text,
    success,
    successText,
    optionalText,
    invalidEmail,
    bgDark, 
    labelLight,
    labelDark
  } = styles;

  const { postMail, msgSuccess, theme } = useContext(Context);
  const whichTheme = theme ? bgDark : ""
  const whichColor = theme ? labelLight : labelDark

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [emailValue, emailHandler, setEmailValue, emailValidation] = useEmailValidate()
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && emailValidation && msg) {
      const mail = {
        name,
        company,
        emailValidation,
        msg,
      };
      setName("");
      setEmailValue("")
      setMsg("");
      postMail(mail);
    }
  };

  return (
    <section className={whichTheme}>
    <div className={container}>
      {msgSuccess && (
        <div className={success}>
          <p className={successText}>Thank you for your message!</p>
        </div>
      )}
      <div className={main}>
        <div className={textBox}>
          <h2 className={text}>
            Get In <br /> Touch
          </h2>
        </div>
        <div className={box}>
          <form onSubmit={submitHandler} className={form}>
            <label htmlFor="fullname" className={`${label} ${whichColor}`}>
              Name*
            </label>
            <input
              id="fullname"
              className={input}
              value={name}
              placeholder="Your name..."
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="company" className={`${label} ${whichColor}`}>
              Company Name <span className={optionalText}>(optional)</span>
            </label>
            <input
              id="company"
              className={input}
              placeholder="Name of the company..."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="email" className={`${label} ${whichColor}`}>
              Email* {(!emailValidation && emailValue.length) ? <span className={invalidEmail}>You need to put valid email!</span> : ""}
            </label>
            <input
              id="email"
              className={input}
              type={"email"}
              value={emailValue}
              placeholder="Your email..."
              onChange={(e) => emailHandler(e)}
            />
            <label className={`${label} ${whichColor}`} htmlFor="msg">
              Message*
            </label>
            <textarea
              onChange={(e) => setMsg(e.target.value)}
              className={input}
              value={msg}
              placeholder="Your message..."
              id="msg"
              cols="30"
              rows="7"
            ></textarea>
            <button className={button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
