// src/pages/Contribua.jsx
import React, { useState } from "react";
import { ClipboardCopy } from "lucide-react";

export default function Contribua() {
  const [copiado, setCopiado] = useState("");

  const pixChaves = [
    {
      descricao: "Chave Pix (CNPJ da Igreja)",
      valor: "62.946.058/0001-80",
    },
    {
      descricao: "Chave Pix (E-mail)",
      valor: "tesouraria.analia@gmail.com",
    },
  ];

  const copiar = (valor) => {
    navigator.clipboard.writeText(valor).then(() => {
      setCopiado(valor);
      setTimeout(() => setCopiado(""), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4 text-[#002B5B]">
      <h2 className="text-xl font-bold mb-4 text-center">💚 Contribua com a Igreja</h2>
      <p className="text-center text-sm mb-6">A sua contribuição nos ajuda a seguir com os projetos da nossa comunidade.</p>

      {pixChaves.map((chave, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-4 mb-4">
          <p className="font-semibold mb-2">{chave.descricao}</p>
          <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
            <span className="text-sm break-all">{chave.valor}</span>
            <button
              onClick={() => copiar(chave.valor)}
              className="text-sm bg-[#014F86] text-white px-3 py-1 rounded hover:bg-[#013e6e] flex items-center gap-1"
            >
              <ClipboardCopy className="w-4 h-4" /> Copiar
            </button>
          </div>
          {copiado === chave.valor && (
            <p className="text-green-600 text-xs mt-1">✅ Copiado!</p>
          )}
        </div>
      ))}

      <div className="mt-6 text-center">
        <p className="text-sm mb-2">Em breve disponibilizaremos o QR Code para facilitar ainda mais sua contribuição.</p>
        <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 italic">
          [ QR Code aqui futuramente 📷 ]
        </div>
      </div>
    </div>
  );
}
