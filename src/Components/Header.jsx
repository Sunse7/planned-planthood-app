import styles from './Header.module.css';

function Header() {
    return ( 
        <header className={styles.header}>
            <img className={styles.img} src="../src/assets/Logo.png" alt="Logo" />
            <h2>PLANNED PLANTHOOD</h2>
        </header>
     );
}

export default Header;