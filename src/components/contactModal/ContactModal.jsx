import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import styles from "./ContactModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactModal() {
  const { setIsActiveContactModal, theme } = useContext(Context);
  const whichTheme = theme ? styles.bgDark : "";
  const whichColor = theme ? styles.labelLight : styles.labelDark;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("mjvqpyqa");
  const [successMessage, setSuccessMessage] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    nameError: false,
    emailError: false,
    messageError: false,
  });

  const displaySuccessMessage = () => {
    setSuccessMessage(true);

    const id = setTimeout(() => {
      setSuccessMessage(false);
      clearTimeout(id);
    }, 5000);
  };

  const isPostValid = () => {
    let isValid = true;

    setErrorMessages((prevState) => ({
      ...prevState,
      nameError: !name.length,
      emailError: !email.length,
      messageError: !message.length,
    }));

    if (!name.length || !email.length || !message.length) {
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className={styles.backdrop}>
      <div className={`${styles.modal} ${whichTheme}`}>
        <div className={styles.modalHeader}>
          <FontAwesomeIcon
            className={styles.closeModal}
            onClick={() => setIsActiveContactModal(false)}
            icon={faClose}
          />
        </div>
        <div className={styles.modalBody}>
          <form
            className={styles.form}
            action="https://formspree.io/f/mjvqpyqa"
            onSubmit={(e) => {
              e.preventDefault();
              if (!isPostValid()) {
                return;
              }
              setName("");
              setEmail("");
              setMessage("");
              handleSubmit(e);
              displaySuccessMessage();
            }}
            method="POST"
          >
            <label
              htmlFor="fullname"
              className={`${styles.label} ${whichColor}`}
            >
              Name*
              {errorMessages.nameError && (
                <span className={styles.errorText}>Name is Required</span>
              )}
            </label>
            <input
              id="fullname"
              className={styles.input}
              value={name}
              placeholder="Your name..."
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className={`${styles.label} ${whichColor}`}>
              Email*
              {errorMessages.emailError && (
                <span className={styles.errorText}>Email is Required</span>
              )}
            </label>
            <input
              id="email"
              className={styles.input}
              type="email"
              value={email}
              placeholder="Your email..."
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label className={`${styles.label} ${whichColor}`} htmlFor="msg">
              Message*
              {errorMessages.messageError && (
                <span className={styles.errorText}>Message is Required</span>
              )}
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)} // Update message state
              className={styles.input}
              value={message}
              placeholder="Your message..."
              id="msg"
              cols="30"
              rows="7"
              name="msg"
            />
            <button
              className={styles.button}
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        {successMessage && (
          <div className={styles.successMessage}>
            <p>Thank you for your Message!</p>
          </div>
        )}
      </div>
    </div>
  );
}
