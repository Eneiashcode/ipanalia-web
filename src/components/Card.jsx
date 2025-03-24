import React from "react";

export default function Card({ icon, label }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-lg flex flex-col items-center justify-center hover:bg-[#E8F1FA] transition-all duration-200">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-center text-sm font-semibold text-[#002B5B]">{label}</p>
    </div>
  );
}
