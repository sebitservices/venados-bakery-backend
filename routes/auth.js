const express = require('express');
const router = express.Router();
const { auth, db } = require('../config/firebase');
const { signInWithEmailAndPassword } = require('firebase/auth');
const { doc, getDoc } = require('firebase/firestore');

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Iniciar sesión con Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Obtener datos adicionales del usuario desde Firestore
    const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      
      // Devolver información del usuario y token
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        user: {
          uid: user.uid,
          email: user.email,
          nombre: userData.nombre,
          rol: userData.rol
        },
        token: await user.getIdToken()
      });
    } else {
      res.status(404).json({ message: 'Datos de usuario no encontrados' });
    }
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al iniciar sesión', 
      error: error.message 
    });
  }
});

module.exports = router; 