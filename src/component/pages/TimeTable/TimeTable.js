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
        (weekDayInd(date.getDay()) + changedDate) +
        (date.getDay() > 5 ? 2 : 0)
    );
    return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
  };
  const weekDayInd = (day) => {
    const weekDay = (day - 1) % 5;
    return weekDay < 0 ? Math.sqrt(weekDay * weekDay) : weekDay;
  };
  const today = new Date();
  const day = weekDayInd(today.getDay());
  const [selectedDate, setSelectedDate] = useState(getChangedDate(day));
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
