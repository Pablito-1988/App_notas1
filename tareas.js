const fs = require('fs')
const chalk = require('chalk')
const tareasJson = JSON.parse(fs.readFileSync(__dirname + '/notas.json', 'utf-8'))
let yargs = require('yargs')
let comando = yargs.argv.comando 
let titulo = yargs.argv.titulo 
let estado = yargs.argv.estado


//agrgando como parametro el __dirname + la ruta de archivo json) devuelve 
function leerJSON(ruta) {
    return JSON.parse(fs.readFileSync(ruta, 'utf-8'))

}
//utilizando la funcion anterior y la ruta , va a mostrar la lista de notas 
function listar(ruta) {
    leerJSON(ruta).notas.forEach(function (elementos, i) {
        console.log(`--- Nota: ${i + 1} ---
            tarea: ${elementos.titulo}
            estado: ${elementos.estado}`)
    })
}
//recibe un array de tareas y lo escribe sobre el archivo json que ya tengo 
function escribirJSON(array) {
    return fs.writeFileSync(__dirname + '/notas.json', JSON.stringify(array))


}
//guarda en el json de tareas el nuevo objeto
function guardarTarea(objeto) {
    tareasJson.notas.push(objeto);
    escribirJSON(tareasJson)
}
//filtra elementos por su estado 
function leerPorEstado(estado) {
    return tareasJson.notas.filter(function (e) {
        return e.estado === estado

    })


}

module.exports = {
    listar,
    escribirJSON,
    guardarTarea,
    leerPorEstado,
}
