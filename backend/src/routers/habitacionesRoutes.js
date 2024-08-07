import { Router } from 'express';
import { registrarHabitacion } from '../controllers/habitacionesController.js'; 

const router = Router(); // Definición del router

// Ruta para registrar una nueva habitación
router.post('/registro', registrarHabitacion);

export default router;
