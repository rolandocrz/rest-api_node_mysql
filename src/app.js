import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import indexRoutes from "./routes/indexRoutes.js";

// Crear un servidor express
const app = express();

app.use(express.json());

// Puerto
const port = 3000;

// Escuchar en el puerto
app.listen(port, () => {
  console.log(`Funcionando en el puerto:  ${port}`);
});

// usuariosRoutes
app.use("/api", usuariosRoutes);
app.use(indexRoutes);
