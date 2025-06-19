const express = require('express');
const router = express.Router();
const { getUsuarios, registrarUsuario, iniciarSesion } = require('../../controllers/usuario/usuarioControllers');

router.get('/registros', getUsuarios)
router.post('/registrar', registrarUsuario);
router.post('/login', iniciarSesion);

module.exports = router;