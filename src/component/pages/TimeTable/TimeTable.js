import styles from "./styles.module.css";
import { useState } from "react";
import Header from "./Header";
import Days from "./Days";
import DayTimeLine from "./DayTimeLine";
import TimeTableOfDay from "./TimeTableOfDay";
import { months } from "../../const/DateHelper";
import timeTable from "../../timeTable";
import STORAGE_KEYS from "../../const/STORAGE_KEYS";
export default function TimeTable() {
   const getChangedDate = (changedDate) => {
      const date = new Date();
      date.setDate(
        date.getDate() +
          (weekDayInd(date.getDate()) + changedDate) -
          1 +
          (date.getDate() > 5 ? 3 : 0)
      );
      return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };
  const weekDayInd = (day) => (day - 1) % 5;
  const today = new Date();
  const day = weekDayInd(today.getDay());
  const [selectedDate, setSelectedDate] = useState(
    getChangedDate(day)
  );
  const [selectedDay, setSelectedDay] = useState(day);
  const [dep] = useState(
    Number(localStorage.getItem(STORAGE_KEYS.DEPARTMENT)) || 0
  );
  const [sem] = useState(
    Number(localStorage.getItem(STORAGE_KEYS.SEMESTER)) || 0
  );



  const handleDayChange = (day) => {
    setSelectedDate(getChangedDate(day));
    setSelectedDay(day);
  };

  return (
    <>
      <div className={styles.contentWrapper}>
        <Header date={selectedDate} selectedDay={selectedDay} />
        <Days currentDay={selectedDay} handleDayChange={handleDayChange} />
        <DayTimeLine />
        <TimeTableOfDay
          today={selectedDay}
          tableData={timeTable[dep][sem][selectedDay]}
        />
      </div>
    </>
  );
}
