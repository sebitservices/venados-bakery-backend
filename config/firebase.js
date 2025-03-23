const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require('firebase/firestore');

// Configuración de Firebase desde variables de entorno o valores por defecto
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyBkmp3mFfz3anyDAxf2ipE_jFQM7JV1g04",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "ventas-venados.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "ventas-venados",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "ventas-venados.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "592419241716",
  appId: process.env.FIREBASE_APP_ID || "1:592419241716:web:e6bf54afb4b3fbca3b28a1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

module.exports = { app, auth, db }; 