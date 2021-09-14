import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function ErrorPage(props) {
  const { sem } = props;
  return (
    <div className={styles.container}>
      <div className={styles.errSection}>
        <h1 className={styles.errTitle}>Oh no!</h1>
        <p className={styles.errDisc}>we don't have {sem} timetable &#128543;</p>
        <Link className={styles.redirectBtn} to="/">
          go to home
        </Link>
      </div>
    </div>
  );
}
