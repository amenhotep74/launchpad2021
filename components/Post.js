import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        src={post.frontmatter.cover_image}
        alt=""
        style={{ objectFit: "cover", maxWidth: "200px", height: "133px;" }}
      />
      <div className={styles.post_text}>
        <span className={styles.date}>{post.frontmatter.date}</span>
        <div className={styles.post_text_toprow}>
          <h5>{post.frontmatter.title}</h5>
        </div>

        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <a href="#">View Post</a>
        </Link>
      </div>
    </div>
  );
}
