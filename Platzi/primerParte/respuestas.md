¿que es una variable y para que sirve?
R= es un espacio en memroria donde podemos guardar info

¿Cual es la diferencia entre declarar e inicializar una variable?
R= declarar es ponerle nombre inicializar es ponerle un valor

¿Cual es la diferencia entre sumar numeros y concatenar strings?
R= sumar es matematico y concatenar es juntar 2 o mas strings

¿Cual operador permite sumar o concatenar?
R= +

### Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion: 

- Nombre --> String
- Apellido --> String
- Nombre del usuario de platzi --> String
- Edad --> num
- Correo Electronico --> String
- Mayor de edad --> boolean
- Dinero ahorrado --> num
- Deudas --> num

### Traduce a lenguaje javascript las variables del ejemplo anterior

- let nombre = 'Abraham Moisés ';
- let apellido = 'González Contreras';
- let usuario = '@IngAbrahamGonzalez';
- let edad = 30;
- let email = 'abrahamgonz93@gmail.com';
- let mayor = true;
- let ahorro = 0;
- let deudas = 30000;

### calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo
- Dinero ahorrado menos deudas

- ¿Que es una funcion?
R= son formas de encapsulacion de codigo para poder reutilizarlos
- ¿Cuando me sirve usar una funcion en mi codigo?
R= cuando quieras reutilizar el codigo
- ¿Cual es la diferencia entre parametro y argumento de una funcion?
R= el parametro es aquello que recibe la funcion y los argumentos son los valores de los parametros 

### calcular e imprimir el siguiente codigo en una funcion, pero cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:

function nombreCompleto(name, lastName) {
    // return nombres + apellidos;
    return name + ' ' + lastName;
}


function saludo(name, lastName, nickname){
    let complenteName = nombreCompleto(name, lastName);
    console.log('Mi nombre es: ' + complenteName + 
    ' pero prefiero que me digas: ' + nickname + '.');
}

saludo('Diana', 'Lanuza', 'Buchibú');

- ¿Que es una condicional?
R= son la forma en la que se ejecuta el codigo dependiendo de una validacion
o condicion
- ¿Que tipos de condicionales existen y cuales son sus diferencias?
R= if, else if, switch, los if son decisiones diferentes y los cases solo comparan entre ciertos casos que existan dentro del condicional
- ¿puedo combinar funciones y condicionales?
si, las funciones pueden encapsular cualquier codigo

### Modifica el siguiente codigo para que funcione con if else

const tipoDeSuscripcion = 'ExpertDuo';

// switch (tipoDeSuscripcion) {
//     case 'Free':
//         console.log('Solo puedes tomar cursos gratis');
//         break;
//     case 'Basic':
//         console.log('Puedes tomar casi todos los cursos por 1 mes');
//         break;
//     case 'Expert':
//         console.log('Puedes tomar casi todos los cursos por 1 año');
//         break;
//     case 'ExpertDuo':
//         console.log('Tu y alguien mas pueden tomar TODOS los cursos durante 1 año');
//         break;
// }

if (tipoDeSuscripcion == "Basic") {
    console.log('Puedes tomar casi todos los cursos por 1 mes');
//         break;
} else if (tipoDeSuscripcion == "Free") {
    console.log('Solo puedes tomar cursos gratis');
} else if (tipoDeSuscripcion == "Expert") {
    console.log('Puedes tomar casi todos los cursos por 1 año');
} else if (tipoDeSuscripcion == "ExpertDuo") {
    console.log('Tu y alguien mas pueden tomar TODOS los cursos durante 1 año');
}

- ¿Que es un ciclo?
R= Es aquel que si no cumple una condicion se vuelve a ejecutar

- ¿Que tipos de ciclos existen?
R= for, do, do while

- ¿Que es un ciclo infinito y porque es un problema?
R= Es aquel que no tiene fin y se ejecuta una y otra vez y es un problema porque puede saturar la memoria hasta que se rompa el codigo

- ¿Puedes mezclar ciclos y condicionales?
R= si

### Cambia los ciclos for por do while y while

for (let i = 0; i < 5; i++) {
    console.log('El valor de i es: ' + i);
}

for (let i = 10; i >= 2; i--){
    console.log('el valor de i es: ' + i);
}


let i = 0;
do {
    console.log('El valor de i es: ' + i);
    i++;
} while (i <= 5 );

let j = 10;
while (j >= 2) {
    console.log('El valor de j es: ' + j);
    j--;
}

### Escribe un codigo en JS que le pregunte a los usuarios cuanto es 2 + 2, si responde bien mostramos en pantalla felicitaciones pero si responde mal volvemos a empezar

while (respuesta != 4) {
    let pregunta = prompt('¿Cuanto es 2 + 2? ');
    respuesta = pregunta;
}

- ¿Que es un array?
R= es un conjunto de elementos const array = [1, 'hola', true, {nombre = 'Abraham', edad = 30}];
- ¿Que es un objeto?
R= es una lista de elementos pero cada elemento tiene un nombre clave
    const obj = { nombre = 'Abraham', edad = 30, comidaFav = ['mole', 'pizza']};
- ¿Cuando es mejor usar objetos y arrays?
R= objetos cuando el nombre de nuestros elementos sea importante para el algoritmo y el array cuando todos los elementos sean iguales
- ¿Puedo mezclar arrays con objetos y viseversa?
R= si, los arrays pueden guardar objetos y los objetos pueden guardar arrays

### Crea una funcion que pueda recibir cualquier array como parametro e imprima su elemento 

function imprimirElemento(arr) {
    console.log(arr[0]);    
}

imprimirElemento(['Abraham', 30, true]);


### Crea una funcion que pueda recibir cualquier array como parametro e imprima sus elementos 1 por 1

function imprimeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

imprimeArray(['Abraham', 'Diana', 'Sonia', 'Julio']);

### Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno

const object1 = {
    nombre : 'Abraham',
    edad : 30,
    comidasFav: ['pollo con mole', 'pizza', 'alitas'],
};

function imprimeObj(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

imprimeObj(object1);