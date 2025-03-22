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

// Escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Funcionando en el puerto: ${PORT}`);
});
