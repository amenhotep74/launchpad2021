import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../../styles/Slug.module.scss";
import { useState } from "react";

export default function PostPage({
  frontmatter: { title, date, cover_image, time_to_read, banner_image },
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
      <div
        className="container mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={banner_image} class={styles.banner_image} />
      </div>

      <div className="container">
        <div className={styles.text_container}>
          <header className="blog-post-header">
            <h2 className="title mb-2">{title}</h2>
            <div className="meta mb-3">
              <span className={styles.date}>{date} </span>
              <span className={styles.time}> {time_to_read} read</span>
            </div>
          </header>

          <div
            className="blog-post-body mt-3"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>

        <div className="promo-section theme-bg-light py-5 text-center"></div>
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
