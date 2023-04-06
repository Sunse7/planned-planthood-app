import styles from './PrimaryButton.module.css';
// console.log(action, 'action');
function PrimaryButton({title, action}) {
    return ( 
        <button onClick={(e) => action(e)} className={styles.button}>{title}</button>
     );
}

export default PrimaryButton;