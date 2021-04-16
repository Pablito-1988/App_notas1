const fs = require('fs')
const chalk = require('chalk')
const tareasJson = JSON.parse(fs.readFileSync(__dirname + '/notas.json', 'utf-8'))
let yargs = require('yargs')
let comando = yargs.argv.comando 
let titulo = yargs.argv.titulo 
let estado = yargs.argv.estado
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
    //filtra las tareas por el estado la sintaxis es node app --comando filtrar --estado entre " "
    case 'filtrar':
        return console.log(tareas.leerPorEstado(estado));
        break;
    // en caso de no poner nada despues de node app    
    case undefined:
        return console.log('Atención - Tienes que pasar una acción.');
        break;    
    default:
        console.log(`No entiendo qué quieres hacer`)
}


