import { Router } from "express";
import { db } from "../controllers/indexController.js";

const router = Router();

// Conexión a la base de datos (Prueba)
router.get("/db", db);

export default router;
