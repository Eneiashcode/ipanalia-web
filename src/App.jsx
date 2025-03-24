// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Contribua from "./pages/Contribua";
import Devocional from "./pages/Devocional";
import PG from "./pages/PG";
import Materiais from "./pages/Materiais";
import PedidoOracao from "./pages/PedidoOracao";
import PedidosRecebidos from "./pages/PedidosRecebidos";
import PushAdmin from "./pages/PushAdmin"; // ✅ nova rota

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/contribua" element={<Contribua />} />
      <Route path="/devocional" element={<Devocional />} />
      <Route path="/pg" element={<PG />} />
      <Route path="/materiais" element={<Materiais />} />
      <Route path="/pedido-oracao" element={<PedidoOracao />} />
      <Route path="/pedidos-recebidos" element={<PedidosRecebidos />} />
      <Route path="/admin-push" element={<PushAdmin />} /> {/* ✅ nova rota */}
    </Routes>
  );
}
