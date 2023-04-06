import DeleteButton from "./DeleteButton";
import styles from "./PlantCard.module.css";

function PlantCard({ plant }) {
  const { plantName, plantDate, url, assignee } = plant;

  return (
    <article className={styles.article}>
      <img src={url} alt="Picture of a plant" className={styles.img} />
      <h4>{plantName}</h4>
      <p>{plantDate}</p>
      <p>{assignee}</p>
      <section>
        <DeleteButton />
      </section>
    </article>
  );
}

export default PlantCard;
