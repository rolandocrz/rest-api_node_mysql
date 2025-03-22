import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import indexRoutes from "./routes/indexRoutes.js";

// Importar puerto
import { PORT } from "./config.js";

// Crear un servidor express
const app = express();

app.use(express.json());

// usuariosRoutes
app.use("/api", usuariosRoutes);
app.use(indexRoutes);

import { DB_PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASS } from "./config.js";

console.log(DB_PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASS);

// Escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Funcionando en el puerto: ${PORT}`);
});
