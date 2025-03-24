import React from "react";
import { Link } from "react-router-dom";

export default function Materiais() {
  // Lista dos arquivos disponíveis — você pode editar essa lista conforme forem adicionando mais
  const materiais = [
    { nome: "Estudo 01 - O QUE É UMA VIDA MISSIONAL", arquivo: "estudo1.pdf" },
    { nome: "Estudo 02 - FAZENDO DISCÍPULOS NO CONTEXTO DIÁRIO", arquivo: "estudo2.pdf" },
    { nome: "Estudo 03 - A IGREJA COMO COMUNIDADE MISSIONAL", arquivo: "estudo3.pdf" },
    { nome: "Estudo 04 - O EVANGELHO COMO CENTRO DA VIDA MISSIONAL", arquivo: "estudo4.pdf" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#002B5B]">Materiais - Vida Missional</h1>
        <p className="text-sm text-gray-600 mt-1">Acesse os estudos em ordem cronológica abaixo:</p>
      </div>

      <ul className="space-y-4">
        {materiais.map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <span className="text-sm font-semibold">{item.nome}</span>
            <a
              href={`/materiais/vida-missional/${item.arquivo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#014F86] underline hover:text-[#002B5B]"
            >
              Abrir PDF
            </a>
          </li>
        ))}
      </ul>

      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-[#014F86] underline hover:text-[#002B5B]">
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
