import express from "express";
import alumnosRoutes from "./routes/alumnosRoutes.js";
import indexRoutes from "./routes/indexRoutes.js";

// Importar puerto
import { PORT } from "./config.js";

// Crear un servidor express
const app = express();

app.use(express.json());

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  // Manejar preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// usuariosRoutes
app.use("/api", alumnosRoutes);
app.use(indexRoutes);

// Escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Funcionando en el puerto: ${PORT}`);
});
