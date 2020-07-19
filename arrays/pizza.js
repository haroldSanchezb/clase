let contador = 0;
let pedidos = [];
const repeticiones = 2;

while(contador < repeticiones) {
  const pedido = new Array(4); // las variables que se crean en un ciclo son temporales
  const valores = ['nombre', 'apellido', 'direccion', 'orden'];

  for (let index = 0; index < pedido.length; index++) {
    pedido[index] = prompt(valores[index]);
  }
  pedidos.push(pedido);
  contador++;

  if(contador === repeticiones) {
    const respuesta = prompt('Desea continuar S o N');

    if(respuesta === 'S') {
      contador = 0;
    }
  }
}

for (let index = 0; index < pedidos.length; index++) {
  console.log(`pedido #${index + 1}`);
  console.log(pedidos[index]);
}
