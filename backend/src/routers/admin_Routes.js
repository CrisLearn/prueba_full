// src/routes/authRoutes.js

import { Router } from 'express';
import { login } from '../controllers/admin_controller.js';

const router = Router();

// Definir la ruta de login
router.post('/login', login);

export default router;
