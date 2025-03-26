import { Router } from "express";
import { data } from "../librerias.js";

const router = Router();

// Conexión a la base de datos (Prueba)
router.get("/alumnos", (req, res) => {
  res.json(data);
});

export default router;
