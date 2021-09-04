import styles from './styles.module.css';
export default function DayTimeLine() {
  return(
    <div className={styles.timeLineSection}>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
    </div>
  )
}
const Circle = ()=><div className={styles.circle}></div>;
