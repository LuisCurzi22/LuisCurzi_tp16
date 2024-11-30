let fs = require("fs");

function leerBicicletas(archivo) {
    let bicicletas = fs.readFileSync(archivo, "utf-8");
    return JSON.parse(bicicletas)
}

module.exports = leerBicicletas