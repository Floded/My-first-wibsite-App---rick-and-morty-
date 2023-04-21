import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  function handleInutChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.Icon}></div>
      <input
        className={styles.Input}
        placeholder="Introduce un ID ...."
        type="search"
        onChange={handleInutChange}
        // value={search}
      />
      <button className={styles.ButtomAdd} onClick={() => onSearch(search)}>
        Add
      </button>
    </div>
  );
}
