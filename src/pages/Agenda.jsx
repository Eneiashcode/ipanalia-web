// src/pages/Agenda.jsx
import React, { useState } from "react";

const agendaEventos = {
  "Maio 2024": [
    { data: "05/05", titulo: "Culto com Ceia", horario: "18h" },
    { data: "12/05", titulo: "Culto das Mães", horario: "18h" },
    { data: "18/05", titulo: "Vigília Jovem", horario: "21h" },
  ],
  "Junho 2024": [
    { data: "02/06", titulo: "Culto de Jovens", horario: "18h" },
    { data: "09/06", titulo: "Escola Bíblica Especial", horario: "10h" },
    { data: "23/06", titulo: "Retiro Espiritual", horario: "08h às 17h" },
  ],
};

export default function Agenda() {
  const [mesAberto, setMesAberto] = useState(null);

  const toggleMes = (mes) => {
    setMesAberto((prev) => (prev === mes ? null : mes));
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4">
      <h2 className="text-xl font-bold text-[#002B5B] mb-4">📅 Programação da Igreja</h2>

      {Object.entries(agendaEventos).map(([mes, eventos]) => (
        <div key={mes} className="mb-4 bg-white rounded-xl shadow-md">
          <button
            className="w-full text-left px-4 py-3 font-semibold text-[#002B5B] border-b border-gray-200 flex justify-between items-center hover:bg-[#e6f1f9] transition"
            onClick={() => toggleMes(mes)}
          >
            {mes}
            <span>{mesAberto === mes ? "▲" : "▼"}</span>
          </button>

          {mesAberto === mes && (
            <ul className="px-4 py-2 space-y-2">
              {eventos.map((evento, index) => (
                <li key={index} className="text-sm text-gray-700 border-b pb-2">
                  <strong>{evento.data}</strong> - {evento.titulo} <span className="text-xs text-gray-500">({evento.horario})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
