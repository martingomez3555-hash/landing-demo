"use client";

import { useState } from "react";

export default function BotFlotante() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden lg:block">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        className="fixed bottom-6 right-6 z-[70] flex items-center gap-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-200"
      >
        <span className="text-sm font-semibold">
          {open ? "Cerrar" : "Asistente"}
        </span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[70] w-[380px] h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-[#0B1120] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#111827]">
            <div>
              <p className="text-sm font-semibold text-[#F8FAFC]">
                Asistente MG
              </p>
              <p className="text-xs text-[#CBD5E1]">
                Resuelve dudas y te orienta
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar asistente"
              className="text-[#CBD5E1] hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          <iframe
            src="https://asistente-mg.lovable.app"
            title="Asistente MG"
            className="w-full h-[calc(100%-65px)] border-0 bg-white"
            allow="clipboard-write; microphone"
          />
        </div>
      )}
    </div>
  );
}