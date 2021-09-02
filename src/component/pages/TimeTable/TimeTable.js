import styles from './styles.module.css';
import Header from './Header';

export default function TimeTable (){
    
    return(
        <>
        <Header/>
        <div className={styles.contentWrapper}>
            Time Table page 
        </div>
        </>
    )
}