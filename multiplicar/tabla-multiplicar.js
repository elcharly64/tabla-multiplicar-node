//requires
const { rejects } = require('assert');
const fs = require('fs');
const { arch } = require('os');

let datos = '';
const data = new Uint8Array(Buffer.from('Hello Node.js'));
let multiplicar = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número válido`);
            return;
        }

        let archivo = `tablas/tabla-${base}.txt`;
        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base*i} \n`;
        }
        fs.writeFile(archivo, datos, (err) => {
            if (err)
                reject(err);
            else {
                resolve(archivo);
            }
        });



    })
}

let listarTabla = (base, limite) => {
    //imprimo por consola la tabla del (base) hasta el (limite)
    console.log(`Tabla de multiplicar del ${base} desde 1 hasta ${limite}\n`);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}
module.exports = {
    multiplicar,
    listarTabla
}