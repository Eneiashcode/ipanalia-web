// src/pages/Devocional.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Devocional() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 p-6 font-sans flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#002B5B]">
        Devocional Diário
      </h1>
      <p className="text-lg text-center mb-6">
        Em breve você encontrará aqui mensagens devocionais para fortalecer sua fé diariamente. 🙏📖
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-[#002B5B] text-white rounded-lg shadow-md hover:bg-[#014F86]"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
