const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animal");
//Nuevo animal
//Recordar que cuando se utiliza un post para agregara un nuevo documento
router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))//respuesta de la petición, la data es la información que estamos almacenando
        .catch((error) => res.json({ message: error }));//Error de la petición
});
module.exports = router; //parte importante, porque este permite hacer el archivo de ruta que en este caso es en el index
