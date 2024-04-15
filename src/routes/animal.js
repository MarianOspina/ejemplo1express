const verifyToken = require('./validate_token');


const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animal");
//Nuevo animal
//Recordar que cuando se utiliza un post para agregara un nuevo documento
router.post("/animals", verifyToken, (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))//respuesta de la petición, la data es la información que estamos almacenando
        .catch((error) => res.json({ message: error }));//Error de la petición
});
module.exports = router; //parte importante, porque este permite hacer el archivo de ruta que en este caso es en el index

//La estructura de un Get y de un Post no cambia, solo cambia al inicio despues del router
router.get("/animals", (req, res) => {
    animalSchema
        .find()
        .then((data) => res.json(data))//respuesta de la petición, la data es la información que estamos almacenando
        .catch((error) => res.json({ message: error }));//Error de la petición
});

//Consultar un animal por su id
router.get("/animals", verifyToken, (req, res) => {
   
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.put("/animals/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id

router.delete("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
