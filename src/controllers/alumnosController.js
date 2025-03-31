import { pool } from "../db.js";

// Controlador para obtener todos los alumnos
const getAlumnos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alumnos");
    res.send(rows);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al obtener todos los alumnos" });
  }
};

// Controlador para obtener un alumno por su id
const getAlumno = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alumnos WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.send(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al obtener el alumno" });
  }
};

// Controlador para crear un alumno
const createAlumno = async (req, res) => {
  try {
    const { matricula, nombre, domicilio, fechanac, sexo, status } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO alumnos (matricula, nombre, domicilio, fechanac, sexo, status) VALUES (?, ?, ?, ?, ?, ?)",
      [matricula, nombre, domicilio, fechanac, sexo, status || 0]
    );
    res.send({
      id: rows.insertId,
      matricula,
      nombre,
      domicilio,
      fechanac,
      sexo,
      status: status || 0,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al crear el alumno" });
  }
};

// Controlador para actualizar un alumno
const updateAlumno = async (req, res) => {
  try {
    const { matricula, nombre, domicilio, fechanac, sexo, status } = req.body;
    const { id } = req.params;
    const [result] = await pool.query(
      "UPDATE alumnos SET matricula = IFNULL(?, matricula), nombre = IFNULL(?, nombre), domicilio = IFNULL(?, domicilio), fechanac = IFNULL(?, fechanac), sexo = IFNULL(?, sexo), status = IFNULL(?, status) WHERE id = ?",
      [matricula, nombre, domicilio, fechanac, sexo, status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    const [rows] = await pool.query("SELECT * FROM alumnos WHERE id = ?", [id]);
    res.send(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al actualizar el alumno" });
  }
};

// Controlador para eliminar un alumno
const deleteAlumno = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM alumnos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Hubo un error al eliminar el alumno" });
  }
};

export { getAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno };
