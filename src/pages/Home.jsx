import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import logo from "../assets/logo.png";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [quantidadePedidos, setQuantidadePedidos] = useState(0);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];
    setQuantidadePedidos(pedidos.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans">
      {/* Cabeçalho */}
      <header className="bg-[#002B5B] text-white shadow-md px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="text-lg font-bold">Igreja Presbiteriana</h1>
            <p className="text-sm text-gray-300">Anália</p>
          </div>
        </div>
        <button onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Menu lateral */}
      {menuAberto && (
        <div className="absolute top-0 left-0 w-3/4 h-full bg-white shadow-lg z-20 p-4">
          <ul className="space-y-4">
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/">Página Inicial</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/devocional">Devocionais</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/agenda">Agenda</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/pg">Pequenos Grupos</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/pedido-oracao">Fazer Pedido de Oração</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer relative">
              <Link to="/pedidos-recebidos">
                Pedidos Recebidos
                {quantidadePedidos > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {quantidadePedidos}
                  </span>
                )}
              </Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/materiais">Materiais</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Banner Hero */}
      <section className="bg-[#014F86] text-white text-center py-6 px-4 mt-4 rounded-xl mx-4 shadow-md">
        <h2 className="text-xl font-bold mb-1">🎥 Culto ao Vivo - Domingo às 18h</h2>
        <p className="text-sm">Acompanhe no nosso canal do YouTube</p>
      </section>

      {/* Carrossel */}
      <Carousel />

      {/* Grid de Cards */}
      <div className="grid grid-cols-2 gap-4 p-4 mt-4">
        <Link to="/devocional">
          <Card icon="📖" label="Devocional Diário" />
        </Link>
        <Link to="/contribua">
          <Card icon="💚" label="Contribua" />
        </Link>
        <Link to="/pg">
          <Card icon="👥" label="Pequenos Grupos" />
        </Link>
        <Link to="/agenda">
          <Card icon="🗓" label="Agenda da Igreja" />
        </Link>
        <Link to="/pedido-oracao">
          <Card icon="🙏" label="Pedido de Oração" />
        </Link>
        <Link to="/materiais">
          <Card icon="📄" label="Materiais para Download" />
        </Link>
      </div>
    </div>
  );
}
