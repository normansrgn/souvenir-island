// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Добавляем для работы с базой данных
import { getAnalytics } from "firebase/analytics";

// Конфигурация вашего приложения Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuiLOtzOrteTw9fQJx_Suf9ON7n-w5RLE",
  authDomain: "souvenirisland-29eda.firebaseapp.com",
  projectId: "souvenirisland-29eda",
  storageBucket: "souvenirisland-29eda.appspot.com",
  messagingSenderId: "1009894972082",
  appId: "1:1009894972082:web:3645d4424a4fe2ce6907ab",
  measurementId: "G-2QYYMKWX5Q",
  databaseURL: "https://souvenirisland-29eda-default-rtdb.firebaseio.com/" // URL вашей базы данных
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Экспорт авторизации и базы данных
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;