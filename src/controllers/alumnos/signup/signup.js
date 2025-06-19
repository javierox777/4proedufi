const ModelAlumno = require("../../../models/alumnos/alumno.model")


const signup = async (req, res) => {
  const {run, nombre, nombre_usuario, apellido, email, password, confirmPassword, genero, curso, edad, fec_nac, altura, peso} = req.body;

  // Ver si el usuario existe
  const existingUser = await ModelAlumno.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  // Validar confirmación de contraseña
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear un nuevo usuario
  const newUser = await ModelAlumno.create({run, nombre, nombre_usuario, apellido, email, password: hashedPassword, genero, curso, edad, fec_nac, altura, peso});

  res.status(201).json(newUser);
};

module.exports = {signup}