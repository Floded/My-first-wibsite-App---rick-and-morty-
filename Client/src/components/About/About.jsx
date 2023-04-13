import React from "react";
import styles from "../About/About.module.css"


export default function About(){
    return(
        <div className={styles.Container}>
            <h2> Este proyecto es llevado a cabo por <b>Luis Lillo</b>.</h2>
            <p> Aqui se vera aplicado todo lo aprendido en el <b>Bootcamp</b> de Henry. <br/>Esta Web fue realizada con <i>REACT </i> en su totalidad. </p>
        </div>
    )
}