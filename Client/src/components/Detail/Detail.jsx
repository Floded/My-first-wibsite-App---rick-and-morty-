import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../Detail/Detail.module.css";

export default function Detail(props) {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.Container}>
      <div className={styles.Button}>
        <button onClick={() => navigate(-1)}>Regresar</button>
      </div>
      <div className={styles.Text}>
        <h1>Name: {character.name}</h1>
        <h1>Status: {character.status}</h1>
        <h1>Gender: {character.gender}</h1>
        <h1>Specie: {character.species}</h1>
        <h1>Status: {character.status}</h1>
        <h1>Origin: {character.origin?.name}</h1>
        <h1>Location: {character.location?.name}</h1>
      </div>
      <div className={styles.Image}>
        <img src={character.image} alt="Not found" />
      </div>
    </div>
  );
}
