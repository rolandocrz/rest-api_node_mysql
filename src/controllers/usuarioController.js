import { pool } from "../db.js";
// Controladores de usuarios

// Controlador para obtener todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.send(rows);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al obtener todos los usuarios" });
  }
};

// Controlador para obtener un usuario por su id
const getUsuario = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.send(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al obtener el usuario" });
  }
};

// Controlador para crear un usuario
const createUsuario = async (req, res) => {
  try {
    const { nombre, domicilio, edad, sexo } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO usuarios (nombre, domicilio, edad, sexo) VALUES (?, ?, ?, ?)",
      [req.body.nombre, req.body.domicilio, req.body.edad, req.body.sexo]
    );
    res.send({ rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al crear el usuario" });
  }
};

// Controlador para actualizar un usuario
const updateUsuario = async (req, res) => {
  try {
    const { nombre, domicilio, edad, sexo } = req.body;
    const { id } = req.params;
    const [result] = await pool.query(
      "UPDATE usuarios SET nombre = IFNULL(?, nombre), domicilio = IFNULL(?, domicilio), edad = IFNULL(?, edad), sexo = IFNULL(?, sexo) WHERE id = ?",
      [nombre, domicilio, edad, sexo, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);

    res.send(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al actualizar el usuario" });
  }
};

// Controlador para eliminar un usuario
const deleteUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al eliminiar el usuario" });
  }
};

export { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario };
