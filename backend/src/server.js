// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import admin_Routes from './routers/admin_Routes.js'
import habitaciones_Routes from './routers/habitacionesRoutes.js'
import connection from './database.js';


// Inicializaciones
const app = express()
dotenv.config()
connection()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors({
    origin: 'http://localhost:5173', // URL de tu frontend Vite
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir cookies y credenciales
  }));

// Middlewares 
app.use(express.json())


// Variables globales


// Rutas 
app.use('/api',admin_Routes)
app.use('/api/habitaciones',habitaciones_Routes)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

// Exportar la instancia de express por medio de app
export default  app

