import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";

import ruta from "./routes.js";

const servidor = express();
servidor.use(cors());
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));

servidor.use('/',ruta);

const PORT = 4000;
servidor.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});