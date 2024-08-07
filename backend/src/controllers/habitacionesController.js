import Habitacion from "../models/habitaciones.js";

const registrarHabitacion = async (req, res) => {
    const nuevaHabitacion = new Habitacion(req.body)
    await nuevaHabitacion.save()
    // Imprimir el mensaje
    res.status(200).json({msg:"Registro"})
};

export {registrarHabitacion}