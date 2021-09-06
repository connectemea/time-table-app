
import styles from "./styles.module.css";
export default function Days(props) {
    const {day} = props;
    return(
       <div className={styles.daysSection}>

           <p className={styles.day}>MON</p>
           <p className={styles.today}>TUE</p>
           <p className={styles.day}>WED</p>
           <p className={styles.day}>THU</p>
           <p className={styles.day}>FRI</p>

       </div>
    )
}

