import DeleteButton from "./DeleteButton";
import styles from './PlantCard.module.css';

function PlantCard({name, date, planter, image}) {
    return ( 
        <article className={styles.article}>
            <img src={image} alt="Picture of a plant" />
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{planter}</p>
            <DeleteButton />
        </article>
     );
}

export default PlantCard;