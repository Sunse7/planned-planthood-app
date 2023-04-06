import styles from './LabeledInput.module.css';

function LabeledInput({title, type, placeholder, action, value}) {
    // console.log(value, 'value');
    return ( 
        <section className={styles.section}>
            <label>{title}</label>
            <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={(e) => action(e.target.value)} />
        </section>
     );
}

export default LabeledInput;