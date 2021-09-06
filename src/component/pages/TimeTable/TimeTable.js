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
  const months = ['JAN' , 'FEB' , 'MAR' , 'APR' , 'MAY' , 'JUN' , 'JULY' , 'AUG' , 'SEP' , 'OCT' , 'NOV' , 'DEC']
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();
  var currentMonth={}
  if (dd < 10) {
    dd = "0" + dd;
  }
  
  // if (mm < 10) {
  //   mm = "0" + mm;
  // }
  today = dd + "/" + mm + "/" + yyyy;
  

  return (
    <>
      <div className={styles.contentWrapper}>
        <Header today={today}/>
        <Days />
        <DayTimeLine />
        <TimeTableOfDay />
      </div>
    </>
  );
}
