// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import OneSignal from "react-onesignal";

// Inicializa o OneSignal
OneSignal.init({
  appId: "SUA_APP_ID_AQUI", // 👈 Substitua pelo App ID real do OneSignal
  allowLocalhostAsSecureOrigin: true,
})
  .then(() => {
    console.log("✅ OneSignal inicializado com sucesso!");
  })
  .catch((err) => {
    console.error("❌ Erro ao iniciar OneSignal:", err);
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
