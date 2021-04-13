const fs = require('fs')
const chalk = require('chalk')
const tareasJson = JSON.parse(fs.readFileSync(__dirname + '/notas.json', 'utf-8'))
let yargs = require('yargs')
let comando = yargs.argv.comando //lee por consola --comando y asigna como valor lo que sigue
let titulo = yargs.argv.titulo //lee por consola --titulo y asigna como valor lo que sigue
let estado = yargs.argv.estado//lee por consola --estado y asigna como valor lo que sigue
const tareas = require('./tareas')
switch (comando) {
    case 'listar':
        //para mostrar la lista de tareas, tanto pendientes como realizadas 
        tareas.listar(__dirname + '/notas.json')
        break;
    case 'crear':
        //para crear una tarea recoda que hay que agragar el --comando --titulo --estado 
        return tareas.guardarTarea({ titulo, estado });
        break;
    //filtra las tareas por el estado la sintaxis es node app --comando filtrar --estado #
    case 'filtrar':
        return console.log(tareas.leerPorEstado(estado));
        break;
    case undefined:
        return console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log(`No entiendo qué quieres hacer`)
}


