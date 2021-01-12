// let base = '2';
const losColores = require('colors');
const { multiplicar, listarTabla } = require("./multiplicar/tabla-multiplicar");
const argumento = require('./configuraciones/yargs').argumento;
let base = argumento.base;
let limite = argumento.limite;
let comando = argumento._[0];

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break
    case 'crear':
        multiplicar(base, limite).then((archivo) => {
            console.log(`Creado el archivo ${losColores.green(archivo)} correctamente`);
        }).catch((err) => {
            console.log(err);
        });
        break
    default:
        console.log('Comando no reconocido: ' + comando);
        break
}



//const { demand } = require('yargs');
//esta forma de abajo utiliza el 'process' de node, pero es un peo para organizar los
//comandos por consola en cuanto al orden y valores. se usa yargs para todo eso
// let base = process.argv[2].split("=")[1];
// console.log(base);
//esta forma destructura el require y al encontrar el método, lo conoce automáticamente
//sin necesidad de llamar al paquete y usarlo por su nombre
/*
    Esta forma de abajo funciona bien, hay que usar la variable product que a su vez
    llama al médodo multiplicar del archivo tabla-multiplicar
*/
// const product = require("./multiplicar/tabla-multiplicar");
// console.log(product);
// aquí habría que usar product.multiplicar para usar el paquete definido arriba