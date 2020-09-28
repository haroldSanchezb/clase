import React from 'react'; // cada vez que creamos o llamamos un componente react en un archivo js hay que importar react
import ReactDOM from 'react-dom'; // modulo que convierte react en un javascript que entiende el navegador, se usa una vez cuando vas a convertir tu app de react al navegador
// modulos internos se usa ./ un modulo hermano o ../ cuando es un modulo padre 
// modulos externos solo se coloca el nombre
import Hola from './hola'; // nuestro componente

const rootApp = document.querySelector('#root-app'); // donde vamos a dejar nuestra app en el html
const miNombre = 'Harold';

ReactDOM.render(<Hola nombre={miNombre}/>, rootApp); // las propiedades se mandan dentro del llamado del componente, pueden ser texto directo, numero o variables
// render toma el componente de react y lo convierte a html que luego añade dentro del elemento que tiene el id app;
// el render solo se hace una vez