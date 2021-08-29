import { useRouter } from "next/router";
import styles from "../styles/Jumbo.module.css";

export const Jumbo = () => {
  const router = useRouter();

  const discoverHow = () => {
    router.push("/contact");
  };

  return (
    <div style={{ background: "#24213B", height: "400px" }}>
      <div className="container">
        <div className="header mt-5 d-flex justify-content-between align-items-center">
          <div className={styles.text_left}>
            <h3 className={styles.header_text}>
              We design, build and grow{" "}
              <b className={styles.header_text_highlight}>results</b> driven
              shopify services for small and large businesses. All under one
              roof.
            </h3>

            <p className={styles.subtext}>Unlock your stores potential.</p>

            <div className={styles.button_grouping}>
              <button
                style={{
                  background: " #e97e67",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  padding: "8px 50px",
                  borderRadius: "15px",
                }}
                className="btn header_btn"
                onClick={discoverHow}
              >
                Discover How
              </button>
              <a
                href="#work"
                className={styles.see_our_work}
                style={{ color: "#e17c67", marginleft: "2rem" }}
              >
                See our work
              </a>
            </div>
          </div>

          <div className="text_right"></div>
        </div>
      </div>
    </div>
  );
};
