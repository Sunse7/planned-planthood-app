import styles from './DeleteButton.module.css';

function DeleteButton({action}) {
    return ( 
        <button onClick={action} className={styles.button}>Ta bort</button>
     );
}

export default DeleteButton;