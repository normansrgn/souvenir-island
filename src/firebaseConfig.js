// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Добавляем для работы с базой данных
import { getAnalytics } from "firebase/analytics";

// Конфигурация вашего приложения Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDeCdMVDxiWA6QrGOcSAMKLEfFb_x0y374",
  authDomain: "souvenirisland-2e03c.firebaseapp.com",
  projectId: "souvenirisland-2e03c",
  storageBucket: "souvenirisland-2e03c.firebasestorage.app",
  messagingSenderId: "342206585918",
  appId: "1:342206585918:web:0622505fab70d2f218c56f",
  measurementId: "G-VXNTRLXDQ1"
};


// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Экспорт авторизации и базы данных
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;