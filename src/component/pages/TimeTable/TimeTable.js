import styles from "./styles.module.css";
import Header from "./Header";
import Days from "./Days";
import DayTimeLine from "./DayTimeLine";
import TimeTableOfDay from "./TimeTableOfDay";
export default function TimeTable() {
    const curenntDay = new Date()
  const timeTable = [
    [
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
    ],
    [
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
    ],
    [
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
    ],
    [
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
    ],
    [
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
      {
        sub: "maths",
        time: "9-10",
      },
    ]
  ];
  return (
    <>
      <div className={styles.contentWrapper}>
        <Header />
        <Days />
        <DayTimeLine />
        <TimeTableOfDay />
      </div>
    </>
  );
}
