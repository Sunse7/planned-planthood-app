import DeleteButton from "./DeleteButton";
import styles from "./PlantCard.module.css";

function PlantCard({ plant }) {
  const { plantName, plantDate, url, assignee } = plant;

  return (
    <article className={styles.article}>
      <img src={url} alt="Picture of a plant" className={styles.img} />
      <section className={styles.nameDateContainer}>
        <h4>{plantName}</h4>
        <h4>{plantDate}</h4>
      </section>
      <section className={styles.nameDateContainer}>
        <p>{assignee}</p>
        <DeleteButton />
      </section>
    </article>
  );
}

export default PlantCard;
