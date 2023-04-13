import { useState } from "react";
import styles from "../Form/Form.module.css";

// Funcion validadora

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validate = (inputs) => {
    const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);   
    const errors = {}
    if(!regexEmail.test(inputs.userName)){
        errors.userName = "Debe ser un email"
    }
    if(!inputs.userName){
        errors.userName = "No puede estar vacio"
    }
    if(inputs.userName.length > 35){
        errors.userName = "No puede tener mas de 35 caracteres"
    }
    if(!validLettersAndNumbers.test(inputs.password)){
        errors.password = "Debe contener minimo un numero"
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;
}


export default function Form(props) {
    // Estado
    const [ userData, setUserData ] = useState({
        userName: "",
        password: ""
    })
    // Estado de errores
    const [ errors, setErrors ] = useState({
        userName: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [ name ]: value,
        })
        setErrors(validate({
            ...userData,
            [ name ]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }

  return (
    <form onSubmit={handleSubmit} className={styles.Container}>
        <img src="https://hips.hearstapps.com/vidthumb/images/rick-y-morty-1626783132.jpg" alt="" />
      <label htmlFor="">Nombre: </label>
      <input 
      type="text" 
      value={userData.userName} 
      name="userName" 
      onChange={handleChange}/>
      {errors.userName ? <p>{errors.userName}</p> : null}
      <label htmlFor="">Usuario: </label>
      <input 
      type="password" 
      value={userData.password} 
      name="password" 
      onChange={handleChange}/>
      {errors.password ? <p>{errors.password}</p> : null}
      <br/>
      <button type="submit">Login</button>
    </form>
  );
}