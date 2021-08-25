import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Contact.module.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

export default function Contact() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      website,
      message,
    };
    console.log(data);

    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("RESPONSE ITSELF", response);
      console.log("INSIDE RESPONSE");
      // if response status 200
      if (response.status == 200) {
        // clear errors
        setError(false);
        setSuccessAlert(true);
      } else {
        setError(true);
      }
    });
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="text-center">
          <h1>Talk with us</h1>
          <p>
            Fill in the form or if you prefer, send us an email:
            launchpadweb@protonweb.com
          </p>
        </div>

        <form className={styles.contact_form} onSubmit={handleSubmit}>
          <div className="mb-3">
            {successAlert && (
              <div className="alert alert-success" role="alert">
                👋 Thanks for getting in touch! we will contact you shortly.
              </div>
            )}
            {error && (
              <div className="alert alert-danger" role="alert">
                There was an error try again later.
              </div>
            )}

            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website (if applicable)
            </label>
            <input
              type="website"
              className="form-control"
              id="website"
              placeholder="www.example.com"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Tell us about your project
            </label>
            <div id="emailHelp" className="form-text mb-2">
              Please tell us a bit about what your looking for, what you want to
              achieve, timeline etc.
            </div>
            <textarea
              type="details"
              className="form-control"
              id="email"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            style={{ background: "#e97e67", color: "white", border: "none" }}
            className="btn header_btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
