import styles from "./styles.module.css";
import Header from "./Header";
import Days from "./Days";
import DayTimeLine from "./DayTimeLine";
import TimeTableOfDay from "./TimeTableOfDay";
export default function TimeTable() {
  const curenntDay = new Date();
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
    ],
  ];

  // date
  var today = new Date();
  var date = today.getDate();
  var day = (Number(today.getDay()) - 1) % 5;

  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "0" + month;
  }
  today = date + "/" + month + "/" + year;

  return (
    <>
      <div className={styles.contentWrapper}>
        <Header today={today}/>
        <Days day={day}/>
        <DayTimeLine />
        <TimeTableOfDay />
      </div>
    </>
  );
}
