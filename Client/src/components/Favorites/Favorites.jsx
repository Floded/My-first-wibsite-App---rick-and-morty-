import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Favorites({ myFavorites }) {
  const { aux, setAux } = useState(false);

  const dispatch = useDispatch();

  // const handleOrder = (event) => {
  //   setAux(true);
  //   const { value } = event.target;
  //   dispatch(orderCards(value));
  // };

  // const handleFilter = (event) => {
  //   const { value } = event.target;
  //   dispatch(filterCards(value))
  // };

  return (
    <div>
      <select onClick={(event)=>{dispatch(orderCards(event.target.value))}}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select onClick={(event)=>{dispatch(filterCards(event.target.value))}}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknow">unknow</option>
      </select>
      {myFavorites?.map(({ name, species, gender, image, id }) => (
        <Card
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null)(Favorites);