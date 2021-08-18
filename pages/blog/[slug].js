import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../../styles/Index.module.css";
import { useState } from "react";
export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
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
      {/* Start of content */}

      <div class="container mt-5">
        <img
          src={cover_image}
          alt=""
          style={{
            repeat: "no-repeat",
            objectFit: "cover",
            height: "350px",
            width: "100%",
            backgroundPosition: "center",
          }}
        />

        <div class="mt-3">
          <h1 style={{ textAlign: "center", fontFamily: "600" }}>{title}</h1>
          <p style={{ textAlign: "center", fontFamily: "400" }}>{date}</p>

          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      {/* End of content */}
      {/* <Link href="/">
        <a className="">Go Back</a>
      </Link>
      <h1>{title}</h1>
      <p>Post on {date}</p>
      <img src={cover_image} alt="" />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
       */}

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
