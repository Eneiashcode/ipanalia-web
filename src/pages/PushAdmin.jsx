// src/pages/PushAdmin.jsx
import React, { useEffect, useState } from "react";

export default function PushAdmin() {
  const [ready, setReady] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (window?.OneSignal) {
      setReady(true);
    } else {
      setErro("OneSignal ainda não carregou.");
    }
  }, []);

  const enviarNotificacao = async () => {
    setEnviando(true);
    setErro(null);
    try {
      await window.OneSignal.sendSelfNotification(
        "🔔 Aviso da Igreja Presbiteriana Anália",
        "Fique atento(a) às novidades e programações especiais!",
        "https://ipanalia.com.br", // link ao clicar
        "https://cdn-icons-png.flaticon.com/512/1055/1055646.png" // ícone
      );
      console.log("✅ Notificação enviada!");
    } catch (error) {
      setErro("Erro ao enviar notificação.");
      console.error("❌ Erro ao enviar notificação:", error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">🔒 Área de Administração - Push</h2>
      <button
        disabled={!ready || enviando}
        onClick={enviarNotificacao}
        className={`px-4 py-2 rounded text-white font-semibold transition-all duration-300 ${
          !ready || enviando ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {enviando ? "Enviando..." : "Enviar Push Agora"}
      </button>
      {erro && <p className="text-red-600 mt-4">{erro}</p>}
    </div>
  );
}
