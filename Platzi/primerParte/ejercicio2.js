// const name = 'Abraham Moises';
// const lastName = ' Gonzalez Contreras';
// const complenteName = name + lastName;
// const nickname = 'Ing Abraham Gonzalez';

// console.log('Mi nombre es: ' + complenteName + 
// ' pero prefiero que me digas: ' + nickname + '.');

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