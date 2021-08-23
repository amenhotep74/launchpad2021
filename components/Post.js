import Link from "next/link";
import styles from "../styles/Blog.module.scss";

export default function Post({ post }) {
  return (
    <div class="item mb-5">
      <div class="row g-3 g-xl-0">
        <div class="col-2 col-xl-3">
          <img
            class="img-fluid post-thumb "
            src={post.frontmatter.cover_image}
            alt="image"
          />
        </div>
        <div class="col">
          <h3 class="title mb-1">
            <Link href={`/blog/${post.slug}`}>
              <a class="text-link" style={{ fontWeight: 600 }}>
                {post.frontmatter.title}
              </a>
            </Link>
          </h3>
          <div class="meta mb-1">
            <span class={styles.date}>
              Published {post.frontmatter.date} &nbsp;
            </span>
            <span class={styles.time}>5 min read &nbsp;</span>
          </div>
          <div class={styles.intro}>{post.frontmatter.excerpt}</div>
          <Link className={styles.morelink} href={`/blog/${post.slug}`}>
            <a class="text-link">Read more &rarr;</a>
          </Link>
        </div>
      </div>
    </div>

    // <div className={styles.post}>
    //   <img
    //     src={post.frontmatter.cover_image}
    //     alt=""
    //     style={{ objectFit: "cover", maxWidth: "200px", height: "133px;" }}
    //   />
    //   <div className={styles.post_text}>
    //     <span className={styles.date}>{post.frontmatter.date}</span>
    //     <div className={styles.post_text_toprow}>
    //       <h5>{post.frontmatter.title}</h5>
    //     </div>

    //     <p>{post.frontmatter.excerpt}</p>
    //     <Link href={`/blog/${post.slug}`}>
    //       <a href="#">View Post</a>
    //     </Link>
    //   </div>
    // </div>
  );
}
