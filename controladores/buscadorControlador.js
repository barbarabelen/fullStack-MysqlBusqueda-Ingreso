const con = require('../conexion_bd');

function buscarNombres(req, res) {
    const sql = "select * from usuario"
    con.connection.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        const response = {
            'nombres': resultado
        };

        res.send(JSON.stringify(response));
    });
}

function buscarNombre(req, res) {
    const id = req.params.id;
    const sql = "select * from usuario where id = " + id;
    con.connection.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        if (resultado.length == 0) {
            console.log("No se encontro ningún nombre con ese id");
            return res.status(404).send("No se encontro ningún nombre con ese id");
        } else {
            const response = {
                'nombre': resultado[0]
            };

            res.send(JSON.stringify(response));
        }

    });
}


// function insertarNombre(req, res) {
//     // const id = req.params.id;
//     const sql = "insert from usuario where nombre = nombre AND apellido = apellido" + id;
//     con.connection.query(sql, function(error, resultado, fields) {
//         if (error) {
//             console.log("Hubo un error en la consulta", error.message);
//             return res.status(404).send("Hubo un error en la consulta");
//         }
//         if (resultado.length == 0) {
//             console.log("No se encontro ningún nombre con ese id");
//             return res.status(404).send("No se encontro ningún nombre con ese id");
//         } else {
//             const response = {
//                 'nombre': resultado[0]
//             };

//             res.send(JSON.stringify(response));
//         }

//     });
// }




module.exports = {
    buscarNombres: buscarNombres,
    buscarNombre: buscarNombre,
    //insertarNombre: insertarNombre
};