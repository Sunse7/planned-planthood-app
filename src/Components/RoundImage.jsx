import styles from './RoundImage.module.css';

function RoundImage({image}) {
    return ( 
        <section className={styles.section}>
            <img className={styles.img} src={image} alt="" />
        </section>
     );
}

export default RoundImage;