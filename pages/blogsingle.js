import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "../components/Header";
import styles from "../styles/Blog.module.css";
import menu from "../styles/Index.module.css";
import blogimg from "../public/images/blog.png";
const Blogsingle = () => {
  const router = useRouter();
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
        <div className={menu.overlay}>
          <button onClick={closeMenu} className={menu.btn_close}>
            <img src="/icons/times-solid.svg" className={menu.times} />
          </button>

          <div className={menu.megamenu_container}>
            <a className={menu.megamenu_a} href="index.html">
              Home
            </a>
            <a className={menu.megamenu_a} href="contact.html">
              Contact
            </a>
            <a className={menu.megamenu_a} href="blog.html">
              Blog
            </a>
          </div>
        </div>
      )}
      {/* End mega menu */}
      <div style={{ background: "#24213B" }}>
        <Header isOpen={isOpen} openMenu={openMenu} />
      </div>
      <div className="container mt-5">
        <div
          className="blog-header"
          style={{
            background: "url('./images/blogsingle.jpg')",
            repeat: "no-repeat",
            backgroundSize: "cover",
            height: "350px",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="mt-3">
          <h1 style={{ textAlign: "center", fontFamily: "600" }}>
            Top 10 Tips for SEO
          </h1>
          <p style={{ textAlign: "center", fontFamily: "400" }}>
            10th October 2021
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dignissim, lacus malesuada sollicitudin consectetur, metus orci
            scelerisque odio, id suscipit dui mauris in est. In tempor volutpat
            ante eget mattis. Fusce tortor nisl, tristique id euismod eget,
            convallis id ligula. Aliquam blandit, est non tempor tempus, neque
            arcu cursus tellus, in viverra ipsum nisl ac est. Nulla sit amet
            mattis tortor, non cursus turpis. Aenean ac tincidunt felis,
            porttitor facilisis sapien. Pellentesque id augue vestibulum,
            rhoncus lorem malesuada, molestie dui.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogsingle;
