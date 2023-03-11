import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [character, setCharacter] = useState([])
  
  function onSearch(id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {
      const data = res.data;
      (data.name ? character.filter((char) => char.id === data.id).length === 0 : "")
      ? setCharacter([...character, data])
      : alert("Personaje ya existe")
    })
  }

  function onClose(id){
    const filt = character.filter((char) => char.id !== Number(id))
    setCharacter(filt)
  }


  return (
    <div className="App">
      <SearchBar onSearch={onSearch}/>
      <Cards character={ character } onClose={onClose}/>
    </div>
  );
}

export default App;
