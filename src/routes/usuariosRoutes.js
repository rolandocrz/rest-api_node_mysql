import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarioController.js";

const router = Router();

// Endpoint - Rutas

// GET
router.get("/usuarios", getUsuarios);

// GET por ID
router.get("/usuarios/:id", getUsuario);

// POST
router.post("/usuarios", createUsuario);

// PATCH
router.patch("/usuarios/:id", updateUsuario);

// DELETE
router.delete("/usuarios/:id", deleteUsuario);

export default router;
