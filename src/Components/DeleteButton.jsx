import styles from './DeleteButton.module.css';

function DeleteButton({action}) {
    return ( 
        <button onClick={(e) => action(e.target.value)} className={styles.button}>Ta bort</button>
     );
}

export default DeleteButton;