import { useState } from "react";
import { sanitize } from "../../utils/miscellaneous";
import styles from "../../styles/Blog.module.scss";

export const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  // Front end form to be rendered
  const handleFormSubmit = () => {
    // clear errors
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  // Handle Input key (when enter is pressed)
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  // Extract message from string

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0].trim()) {
      return sanitize(message);
    }
  };

  return (
    // Return actual front end code for the form here
    <>
      <div class={styles.newsletterwrapper}>
        <div className="input-group mb-3 mt-4">
          <label
            style={{ color: "#FFFFFF", textAlign: "left !important" }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Newsletter
          </label>

          <input
            type="email"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Email"
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <button
            style={{
              background: "#e97e67",
              color: "#FFFFFF",
              border: "none",
            }}
            class={styles.newsletter_btn}
            onClick={handleFormSubmit}
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="error">
        {"sending" === status ? <>loading</> : null}
        {"error" === status || error ? (
          <div
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          ></div>
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div dangerouslySetInnerHTML={{ __html: sanitize(message) }}></div>
        )}
      </div>
    </>
  );
};

export default NewsletterForm;
