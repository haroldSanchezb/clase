/**
Ustedes son administradores de un estacionamiento, el cual cobra 1500 la hora.
Pero tiene unas reglas especiales:

* el sistema le da las variables horas y minutos que contienen el valor de las horas y minutos.

* la casilla minutos solo debe tener valores mayor igual a 0 y menor que 60, si la persona coloca un valor diferente, debe decirle que coloque bien el valor.

* la casilla horas solo debe tener valores mayores a 0, si la persona coloca un valor diferente, debe decirle que coloque bien el valor.

* el sistema solo debe cobrar si horas o minutos es mayor que 0.

* Si la persona usa el estacionamiento menos de 30 minutos (eso quiere decir que la horas debe valer 0 y minutos menos de 30), se le cobra media hora (osea 750).

* Si la persona consume mas de 30 minutos pero menos de una hora (eso quiere decir que la horas debe valer 0 y minutos a partir de 30), se le cobra toda la hora.

* Si la persona consume mas de la hora y unos minutos (eso quiere decir que la horas debe valer mayor que 0 y minutos mayor que 0 pero menor a 60), se le cobra la hora y se saca la cuenta de esos minutos, ejemplo: 1 hora y 3 minutos = 1500 + ((1500/60) * 3).


Exitos!!!
**/


const botonClick = () => {
  const horas = document.querySelector('#horas').value;
  const minutos = document.querySelector('#minutos').value;
  let resultado = '';
  const valorHora = 1500;
  const valorMediaHora = valorHora / 2;
  const valorMinuto = valorHora / 60;
  const operacionMinutos = (valorMinuto * minutos);
  let operacion = (horas * valorHora) + operacionMinutos;

  if (operacion > 0 && operacion < valorMediaHora) {
    operacion = valorMediaHora;
  }
  if (operacion > valorMediaHora && operacion < valorHora) {
    operacion = valorHora;
  }
  if (!operacion) {
    resultado = 'Debes haber consumido asi sea un minuto';
  }
  if (operacion < 0 || operacionMinutos < 0) {
    resultado = 'No tenemos maquina del tiempo';
  }
  if (minutos >= 60) {
    resultado = 'Para eso tenemos la casilla de horas';
  }
  if(!resultado) {
    resultado = `Valor a pagar es de ${operacion}`;
  }
  return resultado;
}

document.querySelector('.boton').addEventListener('click', event => {
  const resultado = botonClick();
  const elemento = document.querySelector('.resultado');

  if(resultado !== '') {
    elemento.classList.remove('oculto');
    elemento.innerHTML = resultado; // nos permite insertar contenido dentro de un elemento, en este caso el div
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  } else {
    elemento.classList.add('oculto');
  }
});
