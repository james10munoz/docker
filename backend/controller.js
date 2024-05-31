import { pool } from "./conexion.js";


export const listar = async(req, res) => {
    try {
        const [ resultado ] = await pool.query("select * from user")

        if(resultado.length > 0) {
            res.status(200).json(resultado)
        }else{
            res.status(404).json({
                "mensaje": "No se encontraron nombres"
            })
        }

    } catch (error) {
        console.error("Error en el bloque try:", error);
        res.status(500).json({
            "mensaje": "Error interno del servidor"
        });
    }
}

export const registrar = async (req, res) => {
    try {
       

        const  { nombre} = req.body;       

        const [resultado] = await pool.query("insert into user (nombre) values (?)",
            [nombre]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "Su nombre ha sido guardado"
            });
        } 
        

    } catch (error) {
        console.error("Error en el bloque try:", error);
        res.status(500).json({
            "mensaje": "Error interno del servidor"
        });
    }
}
