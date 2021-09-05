import styles from "./styles.module.css";
export default function DayTimeLine() {
  return (
    <div className={styles.timeLineSection}>
      {Array.from(Array(5).keys()).map((num) => (
        <Circle content={num + 1} />
      ))}
    </div>
  );
}
const Circle = ({ content }) => (
  <div className={styles.dayNumber}>
    <div className={styles.number}>{content}</div>
    <div className={styles.circle}></div>
  </div>
);
