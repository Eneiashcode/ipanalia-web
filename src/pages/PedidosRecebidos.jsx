import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PedidosRecebidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("pedidosOracao");
    if (dadosSalvos) {
      setPedidos(JSON.parse(dadosSalvos));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#002B5B]">Pedidos de Oração Recebidos</h1>
        <p className="text-sm text-gray-600 mt-1">
          Veja abaixo os pedidos enviados pela comunidade.
        </p>
      </div>

      {pedidos.length === 0 ? (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md text-center text-sm">
          Nenhum pedido foi enviado ainda.
        </div>
      ) : (
        <ul className="space-y-4">
          {pedidos.map((pedido, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-[#002B5B]"
            >
              <p className="text-sm font-semibold mb-1">
                🙏 {pedido.nome ? pedido.nome : "(Anônimo)"}
              </p>
              <p className="text-gray-700 text-sm">{pedido.texto}</p>
              <p className="text-xs text-gray-500 mt-1 text-right">
                {pedido.data}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-[#014F86] underline hover:text-[#002B5B]">
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
