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
/*
import React from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({ name, species, onClose, gender, status, origin, image, id }) =>{
  
   return (
    <div className={styles.div}>
      <button className={styles.btn} onClick={() => onClose(id)}> {/*Cuando hago click en la x, se activa el onClose y se le envia al id*/
   /*       X 
      </button>
      <h2 className={styles.cardInfo}>{name}</h2>
      <h2 className={styles.cardInfo}>{species}</h2>
      <h2 className={styles.cardInfo}>{gender}</h2>
      <h2 className={styles.cardInfo}>{status}</h2>
      <h2 className={styles.cardInfo}>{origin}</h2>
*/
 /*     <Link to={`/detail/${id}`}> {/* esto hacce q me redirija a otro lado con los detalles*/
     /* <img className={styles.cardImage} src={image} alt={name} />*/
    /* </Link>*/
     /* {/*<h4 className={styles.name}>{name}</h4>

      <div className={styles.data} >
        <h4 >{species}</h4>
        <h4 >{gender}</h4>
        
      </div>
    </div>
  );
}

export default Card;

*/

/***********************************ARRIBA MIO- ABAJO PROYECT***********************/


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../../redux/actions/actions";
// import { connect } from "react-redux";

export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
}) {
  //   console.log(props, "props"); cardInfo

  const dispatch = useDispatch(); // CREO UN DISPATCH
  const favorites = useSelector((state) => state.favorites); // ME TRAIGO "favorites" DEL GLOBAL 

  const [isFav, setIsFav] = useState(false);

  function handleClick() {
    //despachar el objeto de la accion
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({
          name,
          species,
          onClose,
          gender,
          status,
          origin,
          image,
          id,
        })
      );
    }
  }

  useEffect(() => {
    // [{1} {3}]
    // {1 ❤️} {2🤍} {3❤️} {44🤍} {66🤍}
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  return (
    <div className={style.cardContainer}>
      {onClose ? (
        <button className={style.closeButton} onClick={() => onClose(id)}>
          X
        </button>
      ) : null}
      <h2 className={style.cardInfo}>{name}</h2>
      <h2 className={style.cardInfo}>{species}</h2>
      <h2 className={style.cardInfo}>{gender}</h2>
      <h2 className={style.cardInfo}>{status}</h2>
      <h2 className={style.cardInfo}>{origin}</h2>
      <Link to={`/detail/${id}`}>
        <img className={style.cardImage} src={image} alt={name} />
      </Link>
      {isFav ? (
        <button onClick={handleClick}>❤️</button>
      ) : (
        <button onClick={handleClick}>🤍</button>
      )}
    </div>
  );
}

// export function mapDispatchToProps(dispatch) {
// //   return {
//     addFavorite: function (character) {
//       // enviando una accion al reducer
//       // const objAction = addFavorite(character)
//       dispatch(addFavorite(character));
//     },
//     removeFavorites: function (id) {
//       dispatch(deleteFavorite(id));
//     },
//   };
// }

// export function mapStateToProps(globalState) {
//   return {
//     favorites: globalState.favorites,
//   };
// }

// voy a enviar nuevas props
// connect("recibo estado" , "despacho acciones")
// export default connect(mapStateToProps, { addFavorite, deleteFavorite })(Card);
