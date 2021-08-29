import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export const Header = (props) => {
  const router = useRouter();

  console.log(props);

  return (
    <>
      <div className={styles.header}>
        <nav className="pt-3 p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <Link href="/">
              <a className={styles.logo}>
                Launchpad
                <span className={styles.logo2}> Web.</span>
              </a>
            </Link>

            <div className={styles.navv_links}>
              <div className={styles.nav_links_inner}>
                <Link href="/">
                  <a className={styles.nav_link_a}>Home</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.nav_link_a}>Contact</a>
                </Link>
                <Link href="/blog">
                  <a className={styles.nav_link_a}>Blog</a>
                </Link>
              </div>

              {!props.isOpen ? (
                <button
                  onClick={() => props.openMenu()}
                  className={styles.mobile_menu_container_btn}
                >
                  <img
                    alt="menu_icon"
                    src="/icons/bars-solid.svg"
                    className={styles.mobile_menu_tgl}
                  />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
