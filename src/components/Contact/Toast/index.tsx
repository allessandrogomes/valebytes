"use client";

import { CheckCircle2, XCircle, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Fecha automaticamente após 5 segundos

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-24 right-4 md:right-8 z-50 flex items-center gap-3 bg-[#EEEEEE] rounded-lg shadow-lg p-4 min-w-[300px] max-w-[400px] transform transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`flex-shrink-0 ${
          type === "success" ? "text-green-500" : "text-red-500"
        }`}
      >
        {type === "success" ? (
          <CheckCircle2 size={24} />
        ) : (
          <XCircle size={24} />
        )}
      </div>
      <p className="flex-1 text-sm md:text-base text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Fechar notificação"
      >
        <X size={20} />
      </button>
    </div>
  );
}
