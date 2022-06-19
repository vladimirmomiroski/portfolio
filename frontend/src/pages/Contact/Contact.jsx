import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Contact() {
  const { container, form, input, label, button, main, box, textBox, text } = styles;

  const { postMail } = useContext(Context)

  const [fullname, setFullname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
      if(fullname && companyName && email && phone && message) {
        const mail = {
          fullname,
          companyName,
          email,
          phone,
          message
        }
          postMail(mail)
      }
  };

  return (
    <div className={container}>
      <div className={main}>
        <div className={textBox}>
          <h2 className={text}>Get In <br/> Touch</h2>
        </div>
        <div className={box}>
          <form onSubmit={submitHandler} className={form}>
            <label htmlFor="fullname" className={label}>
              Fullname
            </label>
            <input id="fullname" className={input} onChange={(e) => setFullname(e.target.value)}/>
            <label htmlFor="company" className={label}>
              Company name
            </label>
            <input
              id="company"
              className={input}
              placeholder="Name of your company"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input id="email" className={input} type={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="phone" className={label}>
              Phone number
            </label>
            <input id="phone" type={"tel"} className={input} onChange={(e) => setPhone(e.target.value)}/>
            <label className={label} htmlFor="msg">
              Message:
            </label>
            <textarea onChange={(e) => setMessage(e.target.value)} className={input} id="msg" cols="30" rows="5"></textarea>
            <button className={button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
