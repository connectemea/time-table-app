import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function ErrorPage(props) {
  const { sem } = props;
  return (
    <div className={styles.container}>
      <div className={styles.errSection}>
        <h1 className={styles.errTitle}>Oops!</h1>
        <p className={styles.errDisc}>
          we don't have {sem} timetable &#128543;
        </p>
        <div className={styles.linkContainer}>
          <a
            href="https://www.instagram.com/tinkerhub.emea/"
            className={styles.redirectBtn}
          >
            Contact
          </a>
          <Link className={`${styles.redirectBtn} ${styles.homeBtn}`} to="/">
            home
          </Link>
        </div>
      </div>
    </div>
  );
}
