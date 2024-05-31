import { Router } from "express";
import { listar, registrar } from "./controller.js";

const ruta = Router();

ruta.get("/listar",listar)
ruta.post("/registrar", registrar)

export default ruta;