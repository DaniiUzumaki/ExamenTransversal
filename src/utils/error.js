// Objetivo: Manejar los errores de la aplicación
const httpError = (res, msj, estado = 400) => {
    return res.status(estado).json(
        {
            "Estado": false,
            "msj": msj
        }
    );
}
// Exportamos la funcion
module.exports = {
    httpError
}