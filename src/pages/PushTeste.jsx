// src/pages/PushTeste.jsx
import React, { useEffect, useState } from "react";

export default function PushTeste() {
  const [oneSignal, setOneSignal] = useState(null);

  useEffect(() => {
    // Log para verificar se o OneSignal está carregado
    console.log("🔍 window.OneSignal:", window.OneSignal);

    if (window.OneSignal) {
      setOneSignal(window.OneSignal);
    } else {
      console.warn("⚠️ OneSignal ainda não está disponível.");
    }
  }, []);

  const enviarNotificacao = async () => {
    if (!oneSignal) {
      console.error("❌ OneSignal ainda não carregado.");
      return;
    }

    try {
      const isEnabled = await oneSignal.isPushNotificationsEnabled();
      console.log("🔔 Push está habilitado?", isEnabled);

      if (!isEnabled) {
        await oneSignal.registerForPushNotifications();
        console.log("📥 Inscrição de push realizada.");
      }

      oneSignal.sendSelfNotification(
        "Notificação de Teste 🚀",
        "Isso é apenas um teste para o app da Igreja Anália.",
        "https://ipanalia.com.br",
        { url: "https://ipanalia.com.br" }
      );

      console.log("✅ Notificação enviada!");
    } catch (err) {
      console.error("❌ Erro ao enviar notificação:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🔔 Teste de Notificação Push</h2>

      <button
        onClick={enviarNotificacao}
        disabled={!oneSignal}
        className={`px-6 py-2 rounded text-white font-semibold transition-all ${
          oneSignal ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Enviar Notificação de Teste
      </button>

      {!oneSignal && (
        <p className="text-red-600 mt-2">
          OneSignal ainda não carregou. Verifique se está tudo certo no main.jsx e se a App ID está correta.
        </p>
      )}
    </div>
  );
}
