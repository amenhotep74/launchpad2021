import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Jumbo } from "../components/Jumbo";
import { Footer } from "../components/Footer";
import styles from "../styles/Index.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Mega menu */}
      {isOpen && (
        <div className={styles.overlay}>
          <button onClick={closeMenu} className={styles.btn_close}>
            <img
              src="/icons/times-solid.svg"
              className={styles.times}
              alt="close_menu"
            />
          </button>

          <div className={styles.megamenu_container}>
            <Link href="/">
              <a className={styles.megamenu_a}>Home</a>
            </Link>
            <Link href="/contact">
              <a className={styles.megamenu_a}>Contact</a>
            </Link>
            {/* <Link href="/contact">
              <a className={styles.megamenu_a}>Blog</a>
            </Link> */}
          </div>
        </div>
      )}
      {/* End mega menu */}

      <div style={{ background: "#24213B" }}>
        <Header isOpen={isOpen} openMenu={openMenu} />
        <Jumbo />
      </div>
      {/* Work */}

      <div id="work" className="container mt-5 mb-5">
        <div className="row">
          <p className={styles.work_ourwork}>Our work</p>
          <p className={styles.work_ourprojects}>Our recent projects</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <a href="#">
              <div
                style={{ background: "url('/images/svensisland.png')" }}
                className={styles.work_image}
              ></div>
            </a>
            <div className="mt-3">
              <h3 className={styles.work_title}>
                <a href="#">Svens Island</a>
              </h3>
              <span className={styles.work_subtitle}>
                Full Website Creation
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <a href="#">
              <div
                style={{ background: "url('/images/femme.png')" }}
                className={styles.work_image}
              ></div>
            </a>
            <div className="mt-3">
              <h3 className={styles.work_title}>
                <a href="#">Femme Organic</a>
              </h3>
              <span className={styles.work_subtitle}>
                Full Website Creation
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8">
            <a href="#">
              <div
                style={{ background: "url('/images/louisboeglin.png')" }}
                className={styles.work_image}
              ></div>
            </a>

            <div className="mt-3">
              <h3 className={styles.work_title}>
                <a href="#">Louis Boeglin</a>
              </h3>
              <span className={styles.work_subtitle}>
                Full Website Creation
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{ background: "url('/images/lenzo.png')" }}
              className={styles.work_image}
            ></div>
            <div className="mt-3">
              <h3 className={styles.work_title}>Lenzo</h3>
              <span className={styles.work_subtitle}>
                Full Website Creation
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* End Work */}

      {/* Services */}
      <div style={{ background: "#29274c", color: "white" }}>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.services_txt_title}>
                <h4 className="our_services_title">Our Services</h4>
                <h3 style={{ fontWeight: 600 }}>What We Do</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.services_txt_inner}>
                <p
                  className="services_title"
                  style={{ fontWeight: 600, fontSize: "1.5rem" }}
                >
                  Launch{" "}
                  <img
                    src="/icons/rocket-solid.svg"
                    className={styles.rocket}
                    alt="rocket_icon"
                  />
                </p>
                <p>
                  Full Website Creation <br />
                  Custom Pages <br />
                  Theme Customization <br />
                  Support <br />
                  Custom Apps <br />
                </p>

                <p
                  className="services_title"
                  style={{ fontWeight: 600, fontSize: "1.5rem" }}
                >
                  Grow{" "}
                  <img
                    src="/icons/chart-line-solid.svg"
                    className={styles.rocket}
                    alt="rocket_icon"
                  />
                </p>
                <p>
                  Conversion Rate Optimization <br />
                  Email Marketing <br />
                  SMS Marketing <br />
                  Facebook Advertising Campaigns <br />
                  SEO <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Services */}

      {/* Banner */}
      <div className="contact_banner p-5">
        <div className="container contact_container">
          <div className={styles.bannerr}>
            <div style={{ color: "white" }} className="row h-100">
              <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-center">
                    <span style={{ fontSize: "2.5rem", fontWeight: "500" }}>
                      2+ years
                    </span>
                    <br />
                    <span className="font-size: 1.8rem;">Time established</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-center">
                    <span style={{ fontSize: "2.5rem", fontWeight: "500" }}>
                      $20,000
                    </span>
                    <br />
                    <span className="font-size: 1.8rem;">Ad spend managed</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-center">
                    <span style={{ fontSize: "2.5rem", fontWeight: "500" }}>
                      $200,000
                    </span>
                    <br />
                    <span className="font-size: 1.8rem;">Sales generated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner */}
      <Footer />
    </>
  );
}
