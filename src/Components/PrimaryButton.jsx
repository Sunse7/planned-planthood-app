import styles from './PrimaryButton.module.css';

function PrimaryButton({title, action}) {
    return ( 
        <button onClick={(e) => action(e)} className={styles.button}>{title}</button>
     );
}

export default PrimaryButton;