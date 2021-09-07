import styles from "./styles.module.css";
import { useState } from "react";
import Header from "./Header";
import Days from "./Days";
import DayTimeLine from "./DayTimeLine";
import TimeTableOfDay from "./TimeTableOfDay";
import { months } from "../../const/DateHelper";
export default function TimeTable() {
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
      }
    ],
    [
      {
        sub: "computer science",
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
      }
    ],
    [
      {
        sub: "english",
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
      }
    ],
    [
      {
        sub: "arbic",
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
      }
    ],
    [
      {
        sub: "urdu",
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
      }
    ],
  ];
  const getDateStr = (date, month, year) =>
    `${date < 10 ? "0" + date : date} ${months[month]} ${year}`;

  const weekDayInd = (day) => (day - 1) % 6;
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const day = weekDayInd(today.getDay());
  const [selectedDay, setSelectedDay] = useState(day);
  const [selectedDate, setSelectedDate] = useState(
    getDateStr(date, month, year)
  );
  const [dep, setDep] = useState(0);
  const [sem, setSem] = useState(0);
  const getChangedDate = (changedDate) => {
    const date = new Date();
    date.setDate(date.getDate() + (weekDayInd(date.getDate()) + changedDate) - 1);
    return getDateStr(date.getDate(), date.getMonth(), date.getFullYear());
  };
  const handleDayChange = (day) => {
    setSelectedDate(getChangedDate(day));
    setSelectedDay(day);
  };

  return (
    <>
      <div className={styles.contentWrapper}>
        <Header date={selectedDate} day={day} selectedDay={selectedDay} />
        <Days
          currentDay={selectedDay}
          handleDayChange={handleDayChange}
        />
        <DayTimeLine />
        <TimeTableOfDay 
          tableData = {timeTable[selectedDay]}
        />
      </div>
    </>
  );
}
