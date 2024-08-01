// Datos quemados (por ejemplo, email y contraseña)
const datosQuemados = {
    email: 'usuario@ejemplo.com',
    password: '123456'
  };
  
  // Controlador para manejar el login
  export const login = (req, res) => {
    const { email, password } = req.body;
  
    // Validar los datos
    if (email === datosQuemados.email && password === datosQuemados.password) {
      // Si los datos coinciden
      res.status(200).json({ mensaje: 'Login exitoso', success: true });
    } else {
      // Si los datos no coinciden
      res.status(401).json({ mensaje: 'Email o contraseña incorrectos', success: false });
    }
  };
  