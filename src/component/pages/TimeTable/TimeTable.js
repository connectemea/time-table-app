import styles from './styles.module.css';
import Header from './Header';
import Days from './Days';
import DayTimeLine from './DayTimeLine';
import TimeTableOfDay from './TimeTableOfDay';
export default function TimeTable (){
    return(
        <>
        
        <div className={styles.contentWrapper}>
            <Header/>
            <Days/>
            <DayTimeLine/>
            <TimeTableOfDay/>
        </div>
        </>
    )
}