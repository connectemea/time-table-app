import styles from "./styles.module.css";
import { days } from "../../const/DateHelper";
export default function Days(props) {
  const { currentDay, handleDayChange } = props;


  const Day = ({ name, day, currentDay }) => (
    <p
      className={currentDay === day ? styles.today : styles.day}
      onClick={() => handleDayChange(day)}
    >
      {name.toUpperCase()}
    </p>
  );

  return (
    <div className={styles.daysSection}>
      {days.map((dayName, ind) => (
        <Day name={dayName} day={ind} currentDay={currentDay} />
      ))}
    </div>
  );
}
