const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../../models/usuario/usuario');

ctrls = {}

ctrls.getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find({}).sort({createdAt: -1})
    res.status(200).json(usuarios)
}

ctrls.registrarUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);
    const nuevoUsuario = new Usuario({ correo, contraseña: contraseñaEncriptada });
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario creado' });
  } catch (err) {
    res.status(400).json({ error: 'Este correo ya existe' });
  }
};

ctrls.iniciarSesion = async (req, res) => {
  const { correo, contraseña } = req.body;
  const usuario = await Usuario.findOne({ correo });

  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

  const coincide = await bcrypt.compare(contraseña, usuario.contraseña);
  if (!coincide) return res.status(400).json({ error: 'Credenciales no válidas' });

  const token = jwt.sign({ id: usuario._id }, 'clave_secreta', { expiresIn: '1h' });
  res.json({ token, usuario: { id: usuario._id, correo: usuario.correo } });
};

module.exports = ctrls