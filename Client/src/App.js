import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [character, setCharacter] = useState([]);
  const [access, setAccess] = useState(false);
  // const userName = "";
  // const password = ""

  function onSearch(id) {
    axios.get(`http://localhost:3001/rickandmorty/character/${id}`).then((res) => {
      const data = res.data;
      (
        data.name
          ? character.filter((char) => char.id === data.id).length === 0
          : ""
      )
        ? setCharacter([...character, data])
        : alert("Personaje ya existe");
    });
  }

  function onClose(id) {
    const filt = character.filter((char) => char.id !== Number(id));
    setCharacter(filt);
  }

  // const login = (userData) => {
  //   if(userData.userName === userName &&
  //     userData.password === password) {
  //       setAccess(true);  
  //       navigate("/home");
  //     }
  // };

  function login(userData) {
    const { userName, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${userName}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
    // console.log(userName, password);
 }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards character={character} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
