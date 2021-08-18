import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Blog.module.css";
import menu from "../styles/Header.module.css";
import blogimg from "../public/images/blog.png";
import Post from "../components/Post";
import { sortByDate } from "../utils";

const Blog = ({ posts }) => {
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

      {/* Blog Archive */}
      <div className="container mt-5">
        <h1 className={styles.header}>Recent Posts</h1>

        <div className="container">
          <div className="">
            {/* Iterate posts here */}
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
      {/* End blog Archive */}
      <Footer />
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  // Get files from the post directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    // Pull
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
