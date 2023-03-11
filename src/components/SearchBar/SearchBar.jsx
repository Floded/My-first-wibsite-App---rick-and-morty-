import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  function handle(event) {
    setSearch(event.target.value);
  }
  return (
    <div className={styles.SearchBar}>
      <div className={styles.ContainImput}>
        <input
          className={styles.Imput}
          placeholder="Introduce un ID ...."
          type="search"
          onChange={handle}
          value={search}
        />
        <button className={styles.ButtomAdd} onClick={() => onSearch(search)}>
          Agregar
        </button>
      </div>
    </div>
  );
}
