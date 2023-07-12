//  Importamos el validador de express
const { check } = require('express-validator');
const { validadorResultado } = require('../utils/validacion');
// Validar los datos de entrada de las peticiones
const validadorVideoJuegos = [
    check('titulo')
        .exists().withMessage("Favor ingresar titulo de la Video Juego en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 3, max: 64}).withMessage("Favor este campo debe etnner un minimo de 3 y un maximo 64"),
    check('descripcion')
        .exists().withMessage("Favor ingresar descripción en JSON")
        .notEmpty().withMessage("Favor este campo no puede estar vacio"),
    check('id_plat')
        .exists().withMessage("Favor ingresar plataforma en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isInt({min: 1}).withMessage("Favor solo debe ingresar números"),
    (req, res, next) => {
        return validadorResultado(req, res, next);
    }
];
//  Exportamos el validador
module.exports = {
    validadorVideoJuegos
}