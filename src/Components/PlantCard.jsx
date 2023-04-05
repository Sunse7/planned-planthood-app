import DeleteButton from "./DeleteButton";
import styles from './PlantCard.module.css';

function PlantCard({plant}) {
    // const {plantName, plantDate, url, assignee} = plant;
    return ( 
        <article className={styles.article}>
            <img src={plant.url} alt="Picture of a plant" />
            <h4>{plant.plantName}</h4>
            <p>{plant.plantDate}</p>
            <p>{plant.assignee}</p>
            <DeleteButton />
        </article>
     );
}

export default PlantCard;