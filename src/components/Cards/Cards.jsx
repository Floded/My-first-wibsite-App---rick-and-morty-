import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

export default function Cards(props) {
  const { character } = props;
  return (
    <div className={styles.container}>
      {character.map(({ id, name, species, gender, image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => props.onClose(id)}
        />
      ))}
      ;
    </div>
  );
}
