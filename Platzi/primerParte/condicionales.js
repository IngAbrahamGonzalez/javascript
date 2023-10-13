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