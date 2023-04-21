import React from "react";
import styles from "../About/About.module.css";

export default function About() {
  return (
    <div className={styles.Container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIgxXdktoe5q3x7os5fExCEUyKJjLONwPpPjl3GiPLBLSZFrjpkvijGNgrRRGRukA9NU&usqp=CAU"
        alt="not found"
      />
      <h2>
        {" "}
        Proyecto de React <i>"Rick and Morty"</i>. <br />
        Por <b>Luis Lillo</b>.
      </h2>
      <p>
        Aqui se vera aplicado todo lo aprendido en el <b>Bootcamp</b> de Henry.
        En ella se uso React para la ejecucion y Express para el Server.
        <br />
      </p>
    </div>
  );
}
