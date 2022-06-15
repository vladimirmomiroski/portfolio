import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const { container, form, input, label, button, main, box, textBox, text } = styles;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitirano");
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
            <input id="fullname" className={input} />

            <label htmlFor="company" className={label}>
              Company name
            </label>
            <input
              id="company"
              className={input}
              placeholder="Name of your company"
            />

            <label htmlFor="email" className={label}>
              Email
            </label>
            <input id="email" className={input} type={"email"} />

            <label htmlFor="phone" className={label}>
              Phone number
            </label>
            <input id="phone" type={"tel"} className={input} required />
            <label className={label} htmlFor="msg">
              Message:
            </label>
            <textarea className={input} id="msg" cols="30" rows="5"></textarea>
            <button className={button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
