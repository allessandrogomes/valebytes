"use client";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { EASE_OUT_SOFT } from "../../motion/Reveal";

const AUTO_CLOSE_DELAY_MS = 5000;

export const ToastType = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type ToastType = (typeof ToastType)[keyof typeof ToastType];

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  const isSuccess = type === ToastType.SUCCESS;

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(onClose, AUTO_CLOSE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed top-24 right-4 z-[60] flex max-w-[400px] min-w-[280px] items-center gap-3 rounded-xl border-2 border-ink bg-white p-4 shadow-hard md:right-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.35, ease: EASE_OUT_SOFT }}
        >
          <span
            className={cn(
              "shrink-0",
              isSuccess ? "text-green-600" : "text-red-600",
            )}
          >
            {isSuccess ? (
              <CheckCircle2 className="h-6 w-6" />
            ) : (
              <XCircle className="h-6 w-6" />
            )}
          </span>
          <p className="flex-1 text-sm text-ink md:text-base">{message}</p>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-ink-soft transition-colors hover:text-ink"
            aria-label="Fechar notificação"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
