import styles from './styles.module.css';
import Header from './Header';
import Days from './Days';

export default function TimeTable (){
    return(
        <>
        
        <div className={styles.contentWrapper}>
            <Header/>
            <Days/>
        </div>
        </>
    )
}