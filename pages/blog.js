import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Blog.module.scss";
import menu from "../styles/Header.module.css";
import blogimg from "../public/images/blog.png";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import { NewsletterSubscribe } from "../components/newsletter/NewsletterSubscribe";

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

      <div class="main-wrapper">
        <section class="cta-section theme-bg-light py-5">
          <div class="container text-center single-col-max-width">
            <h2 class="heading">Recent Posts</h2>
            <div class="intro">
              Welcome to my blog. Subscribe and get my latest blog post in your
              inbox.
            </div>
            <NewsletterSubscribe />
            {/* <div class={styles.newsletterwrapper}>
              <div class="input-group mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class={styles.newsletter_btn}
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div> */}

            {/* <div class="single-form-max-width pt-3 mx-auto">
              <form class="signup-form row g-2 g-lg-2 align-items-center">
                <div class="col-12 col-md-9">
                  <label class="sr-only" for="semail">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="semail"
                    name="semail1"
                    class="form-control me-md-1 semail"
                    placeholder="Enter email"
                  />
                </div>
                <div class="col-12 col-md-2">
                  <button type="submit" class="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </section>

        <section class="blog-list px-3 py-5 p-md-5">
          <div class="container single-col-max-width w-50">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </section>
      </div>

      {/* <div className="container mt-5">
        <h1 className={styles.header}>Recent Posts</h1>

        <div className="container">
          <div className="">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div> */}
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
