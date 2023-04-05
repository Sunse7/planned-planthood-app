import styles from './LabeledInput.module.css';

function LabeledInput({title, type, placeholder, action, value}) {
    return ( 
        <section className={styles.section}>
            <label>{title}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={action} />
        </section>
     );
}

export default LabeledInput;