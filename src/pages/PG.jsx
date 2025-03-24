// src/pages/PG.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PG() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans p-4">
      {/* Título */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#002B5B]">Pequenos Grupos (PG)</h1>
        <p className="text-sm text-gray-600">Participe de um PG perto de você!</p>
      </div>

      {/* Lista dos PGs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-lg font-semibold text-[#002B5B] mb-1">🏠 PG - Jardim das Flores</h2>
          <p className="text-sm text-gray-700 mb-1">📍 Rua Acurui, 327</p>
          <p className="text-sm text-gray-700 mb-1">🕕 Todas as terças às 20h00</p>
          <p className="text-sm text-gray-600">Conduzido por: Rev. Michael</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-lg font-semibold text-[#002B5B] mb-1">🏠 PG - Vila Esperança</h2>
          <p className="text-sm text-gray-700 mb-1">📍 Rua Antonio de Lucena, 155</p>
          <p className="text-sm text-gray-700 mb-1">🕕 Todas as quintas às 20h</p>
          <p className="text-sm text-gray-600">Conduzido por: Pb. Alberto</p>
        </div>
      </div>

      {/* Voltar */}
      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-[#014F86] underline hover:text-[#002B5B]">
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
