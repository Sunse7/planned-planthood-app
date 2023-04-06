import styles from './DatePicker.module.css';
import { useRef } from "react";

function DatePicker({value, title, action}) {
    const dateInputRef = useRef(null)

    return ( 
        <section className={styles.section}>
            <label>{title}</label>
            <input className={styles.input} type="date" onChange={(e) => action(e.target.value)} value={value} ref={dateInputRef} />
        </section>
     );
}

export default DatePicker;