// src/routes/authRoutes.js

import { Router } from 'express';
import { login } from '../controllers/authController.js';

const router = Router();

// Definir la ruta de login
router.post('/login', login);

export default router;
