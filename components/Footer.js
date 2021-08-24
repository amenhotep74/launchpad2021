import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the fontawesomeIcon component
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { NewsletterSubscribe } from "../components/newsletter/NewsletterSubscribe";

export const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.foot}>
      <div className="container px-5">
        <div className="row">
          <div className="col-md-6">
            <span className={styles.logo} style={{ color: "white" }}>
              Launchpad{" "}
              <span
                className={styles.logo2}
                style={{ fontWeight: "400", color: "white" }}
              >
                Studios.
              </span>
            </span>

            <div className={styles.footer_nav_links}>
              <a href="#" className="footer_nav_link pt-3">
                Home
              </a>{" "}
              <br />
              <a href="#" className="footer_nav_link pt-3">
                Blog
              </a>{" "}
              <br />
              <a href="#" className="footer_nav_link pt-3">
                Contact
              </a>{" "}
              <br />
            </div>
            <div className=" mt-3">
              <div className="footer_social_links" style={{}}>
                <a style={{ color: "white" }} href="#">
                  <img
                    style={{ maxWidth: "36px", height: "auto" }}
                    className={styles.icon_yt}
                    src="/icons/youtube-brands.svg"
                  />
                </a>
                <a style={{ color: "white" }} href="#">
                  <img
                    style={{ maxWidth: "32px", height: "auto" }}
                    className={styles.icon_instagram}
                    src="/icons/instagram-brands.svg"
                  />
                </a>
                <a style={{ color: "white" }} href="#">
                  <img
                    style={{ maxWidth: "28px", height: "auto" }}
                    className={styles.icon_fb}
                    src="/icons/facebook-brands.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 get_in_touch_footer">
            <div className="">
              <h4 style={{ color: "white", textAlign: "center" }}>
                Get in touch.
              </h4>
              {/* Form here */}
              <form>
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
                />
                <button
                  style={{
                    background: "#e97e67",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                  className="btn header_btn mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
