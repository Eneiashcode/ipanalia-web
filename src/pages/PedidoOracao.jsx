import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PedidoOracao() {
  const [nome, setNome] = useState("");
  const [pedido, setPedido] = useState("");
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pedido.trim() === "") return;

    const novoPedido = {
      nome: nome.trim() !== "" ? nome : null,
      texto: pedido.trim(),
      data: new Date().toLocaleString("pt-BR"),
    };

    const pedidosAnteriores = JSON.parse(localStorage.getItem("pedidosOracao")) || [];
    const pedidosAtualizados = [...pedidosAnteriores, novoPedido];
    localStorage.setItem("pedidosOracao", JSON.stringify(pedidosAtualizados));

    setMensagemEnviada(true);
    setNome("");
    setPedido("");
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#002B5B]">Pedido de Oração</h1>
        <p className="text-sm text-gray-600 mt-1">
          Compartilhe seu pedido para que possamos orar por você.
        </p>
      </div>

      {mensagemEnviada && (
        <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4 text-sm text-center">
          🙏 Pedido de oração enviado com sucesso!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-xl mx-auto"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">Nome (opcional)</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            maxLength={80}
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Pedido de oração *</label>
          <textarea
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            maxLength={300}
            placeholder="Escreva aqui seu pedido de oração..."
            required
          />
          <p className="text-xs text-gray-500 text-right">
            {pedido.length}/300 caracteres
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#014F86] text-white py-2 rounded-md hover:bg-[#002B5B] transition"
        >
          Enviar Pedido
        </button>
      </form>

      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-[#014F86] underline hover:text-[#002B5B]">
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
