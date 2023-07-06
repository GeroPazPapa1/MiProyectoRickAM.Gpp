/*import  React from 'react';

//esqueleto basico de un componente de clase 
/*class  EstadoClase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {}

}*

{/*export default EstadoClase;*/

/*//El constructor es lo 1ro q se ejecuta
class EstadoClase extends React.Component {
    constructor(props) {
        super(props);
        // La pregunta que deberia hacerme es: 
        // Cuando me pregunto si aca puedo poner otra palabra/nombre
        // Por que querría hacerlo? XQ LLAMARIA AL ESTADO DE OTRA FORMA?
        // Q te indica mas la palabra gato o state? entonces le ponemos estado a state
        this.state = {
            count: 0,
            nombre: "Alan",
        };
    }
*/



/* Es el q retorna el fragmento de html que vamos a mandar al DOM*/
        /*render()
            const aumentar = () => {
                // aumentar el contador/}
                this.setState({ count: this.state.count + 1 }); //con state podemos renderizar cuando el estado cambia, entonces si sacamos state no estariamos modificando el estado
                
            };*/
            /*const disminuir = () => {
                // disminuir el contador
                this.state.count > 0 && this.setState({ count: this.state.count - 1 });//con state podemos renderizar cuando el estado cambia, entonces si sacamos state no estariamos modificando el estado
            };*/

            /*return(
                <>  
                    <h1>Contador con estados (Clase)</h1>
                    <h3>{this.state.count}</h3> //asi si impacta el cambio, sin state no.
                    <button onClick={disminuir}>-</button>
                    <button onClick={aumentar}>+</button>
                </> 
        );
    }

}*/

/* Este seria el q acutualiza el dom y hace q sea visible. 
Seria como que se dispara, cuando el componente se ha montado correctamente
Esto sucederá un monton de veces, vamos a utilizarlo un monton de veces*/

/*Cuando monto el componente, pido determinada info a un servidor
Esta informacion, se guarda en un ESTADO*/
/*componentDidMount () {
    console.log();
}*/

/* Este sera cuando se actualice, no cuando nace*/
/*componentDidUpdate () {
    console.log();
}

/*Cuando borro, borro todo lo que dejé guardado en el estado*/
/*componentWillUnmount () {
    console.log();
}*/



/*export default EstadoClase;*/


/* characters = []

setCharacters ( [...characters, "hola"])
*/