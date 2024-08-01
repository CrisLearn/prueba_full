// Datos quemados (por ejemplo, email y contraseña)
const datosQuemados = {
    username: 'cristian',
    password: '123456'
  };
  
  // Controlador para manejar el login
  export const login = (req, res) => {
    const { username, password } = req.body;
  
    // Validar los datos
    if (username === datosQuemados.username && password === datosQuemados.password) {
      // Si los datos coinciden
      res.status(200).json({ mensaje: 'Login exitoso', success: true });
    } else {
      // Si los datos no coinciden
      res.status(401).json({ mensaje: 'username o contraseña incorrectos', success: false });
    }
  };
  