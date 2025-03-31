import { Router } from "express";
import {
  getAlumnos,
  getAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from "../controllers/alumnosController.js";

const router = Router();

// Endpoint - Rutas

// GET
router.get("/alumnos", getAlumnos);

// GET por ID
router.get("/alumnos/:id", getAlumno);

// POST
router.post("/alumnos", createAlumno);

// PATCH
router.patch("/alumnos/:id", updateAlumno);

// DELETE
router.delete("/alumnos/:id", deleteAlumno);

export default router;
