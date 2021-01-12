let opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 30,
        alias: 'l'
    }
}

const argumento = require('yargs')
    .command('crear', 'Crear un achivo con la tabla de multiplicar', opciones)
    .command('listar', 'Listar la tabla de multiplicar hasta un límite determinado', opciones)
    .help()
    .argv;

module.exports = {
    argumento
}