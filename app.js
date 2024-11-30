let leerBicicletas = require("./datosBici.js")

let bicis = leerBicicletas("./bicicletas.json")

let dhBici = {
    bicicletas: bicis,
    buscarBici: function(idBici) {
        return this.bicicletas.filter(function(bici){
            if (bici.id === idBici) {
                return bici
            }
        })
    },
    venderBici: function(idBici) {
        if (this.buscarBici(idBici) == []){
            return "Bicicleta no encontrada"
        } else {
            this.buscarBici(idBici)[0].vendida = true
            return this.buscarBici(idBici)[0]
        }
    },
    biciParaLaVenta: function(){
        return this.bicicletas.filter(function(bici){
            if (!bici.vendida){
                return bici
            }
        })
    },
    totalDeVentas: function(){
        let total = 0;
        return this.bicicletas.reduce(function(total, bici){
            if (bici.vendida){
                total += bici.precio
            }
            return total
        }, 0)
    }
}

console.log(dhBici.bicicletas)
console.log(dhBici.buscarBici(1))
console.log(dhBici.venderBici(3))
console.log(dhBici.biciParaLaVenta())
console.log(dhBici.totalDeVentas())