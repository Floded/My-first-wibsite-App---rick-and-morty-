import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState } from "react";

function Card({ name, species, gender, image, onClose, id }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, gender, image, onClose, id });
    }
  };
  return (
    <div className={styles.Card}>
      <div className={styles.ImgContainer}>
        <img className={styles.Img} src={image} alt="Not found" />
      </div>
      <div className={styles.TextContainer}>
        <h2>Specie: </h2>
        <h3> {species} </h3>
        <h2>Name: </h2>
        <Link to={`/detail/${id}`}>
          <h3> {name} </h3>
        </Link>
        <h2>Gender: </h2>
        <h3> {gender} </h3>
      </div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.Buttom} onClick={onClose}>
        X
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    deleteFav: (id) => {
      dispatch(deleteFav(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
