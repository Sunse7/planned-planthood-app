import styles from './LabeledInput.module.css';

function LabeledInput({title, type, placeholder}) {
    return ( 
        <section className={styles.section}>
            <label>{title}</label>
            <input type={type} placeholder={placeholder} />
        </section>
     );
}

export default LabeledInput;