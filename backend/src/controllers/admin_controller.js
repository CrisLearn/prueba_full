import Administrador from '../models/administradores.js';

export const login = async (req, res) => {
  const { user, password } = req.body;

  if (Object.values(req.body).includes("")) {
    return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" });
  }

  console.log('Searching for user:', user);

  try {
    const AdministradorBDD = await Administrador.findOne({ user });
    console.log('User found:', AdministradorBDD);

    if (!AdministradorBDD) {
      return res.status(404).json({ msg: "Lo sentimos, el usuario no se encuentra registrado" });
    }

    const verificarPassword = AdministradorBDD.matchPassword(password);
    console.log('Password match:', verificarPassword);

    if (!verificarPassword) {
      return res.status(401).json({ msg: "Lo sentimos, el password no es el correcto" });
    }

    res.status(200).json({ msg: "Login exitoso" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};
