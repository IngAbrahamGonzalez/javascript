
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('pid');

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const suma = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerText = "Resultado: " + suma;
}


// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito <br> Feo'; // convierte todo a codigo html
// h1.innerText = 'Patito <br> Feo'; // convierte todo a tecto plano

// h1.getAttribute('pantalla');
// h1.setAttribute('class', 'Rojo');

// h1.classList.add('Abdi'); // agregar 
// h1.classList.remove('Abdi'); // eliminar

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value = 'Que me vez wey!';

// const img = document.createElement('img');
// img.setAttribute('src', 'https://img.freepik.com/foto-gratis/plantula-nuevo-bebe-bosque-primavera_1150-1726.jpg?w=826&t=st=1697219343~exp=1697219943~hmac=e44d3668a98738bc0db969d51053ee3982d4b965a2593aab3549d078507696f9');
// console.log(img);

// pid.append(img);



