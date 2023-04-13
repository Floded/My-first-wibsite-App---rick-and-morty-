import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";


export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.Card}>
      <div className={styles.ImgContainer}>
        <img className={styles.Img} src={image} alt="Not found" />
      </div>
      <div className={styles.TextContainer}>
        <h2>Specie: </h2>
        <h3> {species} </h3>
        <h2>Name: </h2>
        <Link to={`/detail/${id}`}><h3> {name} </h3></Link>
        <h2>Gender: </h2>
        <h3> {gender} </h3>
      </div>
      <button className={styles.Buttom} onClick={onClose}>X</button>
    </div>
  );
}
