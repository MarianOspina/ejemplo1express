const mongoose = require("mongoose"); // importando el componente mogoose
const animalSchema = mongoose.Schema({//creamos una colección
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,//si es true este elemento es TOTALMENTE REQUERIDO
    },
    fecha: {
        type: Date,
        requiered: false,// si es false este elemento NO ES REQUERIDO
    }
});// elementos de la colección
module.exports = mongoose.model("Animal", animalSchema);//aqui mandamos animal.js a animal
