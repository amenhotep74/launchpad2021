import Link from "next/link";
import styles from "../styles/Blog.module.scss";

export default function Post({ post }) {
  return (
    // <div class="item mb-5">
    //   <div class="row g-3 g-xl-0">
    //     <div class="col-2 col-xl-3">
    //       <img
    //         class="img-fluid post-thumb "
    //         src={post.frontmatter.cover_image}
    //         alt="image"
    //       />
    //     </div>
    //     <div class="col">
    //       <h3 class="title mb-1">
    //         <Link href={`/blog/${post.slug}`}>
    //           <a class="text-link" style={{ fontWeight: 600 }}>
    //             {post.frontmatter.title}
    //           </a>
    //         </Link>
    //       </h3>
    //       <div class="meta mb-1">
    //         <span class={styles.date}>
    //           Published {post.frontmatter.date} &nbsp;
    //         </span>
    //         <span class={styles.time}>5 min read &nbsp;</span>
    //       </div>
    //       <div class={styles.intro}>{post.frontmatter.excerpt}</div>

    //     </div>
    //   </div>
    // </div>

    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        {/* <strong className="d-inline-block mb-2 text-primary">World</strong> */}
        <Link href={`/blog/${post.slug}`}>
          <a>
            View Post
            <h3 className="mb-0">{post.frontmatter.title}</h3>
          </a>
        </Link>

        <div className="mb-1 text-muted">{post.frontmatter.date}</div>
        <p className="card-text mb-auto">{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <a href="#" className="stretched-link">
            Continue reading
          </a>
        </Link>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img
          // className="bd-placeholder-img"
          width="200"
          height="250"
          src={post.frontmatter.cover_image}
          role="img"
          alt="cover_image"
        />
      </div>
    </div>

    // <div classNameName={styles.post}>
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
