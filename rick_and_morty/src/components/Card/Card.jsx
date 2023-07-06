//buena practica era poner el import de react
/*import React from "react";
import styles from "./Card.module.css";*/

// import style from './Cards.module.css';
//import style from "styled-components";

/*const DivConEstilos = style.div`
   backgrpungd-color: gray;
   border-radius: 10px;
   color: "#FFFFFF";
   margin: auto;
   widtg: 50%;

`;*/


//JORGE VEGA HACEN CON EXPORT DEFAULT MATIAS EL REEMPLAZANTE DE HERNAN
// HACE ASI COMO ESTA DIRECTAMENTE, SIMPLEMENTE XQ LE GUSTA 
// export default function Card({
   
/*const Card = ({ 
   name, 
   species, 
   gender, 
   image, 
   onClose, 
   status, 
   origin
   
}) =>{  // aca estoy haciendo destructuring al pasar esas palabras por parametro en lugar de dentro del div

// De esta manera haces css style en react 
{/* con Inline Styling
      const styleDiv = {
         backgroundColor: "grey",
         borderRadius: "10px",
         color: "#FFFFFF",
         margin: "auto",
         width: "50%"
      };*/
   /*return (
      <div className={styles.div}>
          <button className={styles.btn} onClick={onClose}> X </button>
         <img className={styles.image} src={image} alt={name} />
         <h4 className={styles.name}>{name}</h4>
     
         <div className={styles.data} >
            <h4 >{species}</h4>
            <h4 >{gender}</h4>
            {/* <h4 className={styles.text}>{origin}</h4> */
            /* <h4 className={styles.text}>{status}</h4>  */
         /*</div>
      </div>
      );
   };*/



//**********************************CLASE ESATADOS Y CICLOS****************************** */



/*const Card = (props) => {
   return (
      <>
      {props.user.map((user) => {
         return <Card name={user.name} email={user.email} />;
      })}
      </>
   );
};

export default Card;*/



//**********************************CLASE ESATADOS Y CICLOS con hernan**************** */

import React from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({ name, species, onClose, gender, status, origin, image, id }) =>{
  
   return (
    <div className={styles.div}>
      <button className={styles.btn} onClick={() => onClose(id)}> {/*Cuando hago click en la x, se activa el onClose y se le envia al id*/}
          X 
      </button>
      <h2 className={styles.cardInfo}>{name}</h2>
      <h2 className={styles.cardInfo}>{species}</h2>
      <h2 className={styles.cardInfo}>{gender}</h2>
      <h2 className={styles.cardInfo}>{status}</h2>
      <h2 className={styles.cardInfo}>{origin}</h2>

      <Link to={`/detail/${id}`}> {/* esto hacce q me redirija a otro lado con los detalles*/}
      <img className={styles.cardImage} src={image} alt={name} />
      </Link>
      {/*<h4 className={styles.name}>{name}</h4>

      <div className={styles.data} >
        <h4 >{species}</h4>
        <h4 >{gender}</h4>
        
      </div>*/}
    </div>
  );
}

export default Card;