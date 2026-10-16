"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Loader2, Mail, Send } from "lucide-react";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import {
  CONTACT_API_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  SECTION_IDS,
  WHATSAPP_URL,
} from "@/lib/site";
import { buttonVariants } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../motion/Reveal";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { Toast, ToastType } from "./Toast";

const SUCCESS_MESSAGE =
  "Mensagem enviada com sucesso! Entraremos em contato em breve.";
const ERROR_MESSAGE =
  "Erro ao enviar a mensagem. Tente novamente ou fale pelo WhatsApp.";
const DEFAULT_TITLE = "Pronto para dar o próximo passo?";

const SubmitStatus = {
  IDLE: "idle",
  SUCCESS: "success",
  ERROR: "error",
} as const;

type SubmitStatus = (typeof SubmitStatus)[keyof typeof SubmitStatus];

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const EMPTY_FORM: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const INPUT_CLASS_NAME =
  "w-full rounded-lg border-2 border-ink bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition-shadow duration-200 focus:bg-white focus:shadow-hard-sm focus:outline-none";

const CONTACT_CARD_CLASS_NAME =
  "group flex items-center gap-4 rounded-xl border-2 border-ink p-5 text-ink shadow-hard transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg";

interface ContactProps {
  index: string;
  title?: string;
}

export function Contact({ index, title = DEFAULT_TITLE }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
    SubmitStatus.IDLE,
  );

  const closeToast = useCallback(() => setSubmitStatus(SubmitStatus.IDLE), []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(SubmitStatus.IDLE);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setSubmitStatus(SubmitStatus.ERROR);
        return;
      }

      setSubmitStatus(SubmitStatus.SUCCESS);
      setFormData(EMPTY_FORM);
    } catch (error) {
      console.error("Erro na requisição:", error);
      setSubmitStatus(SubmitStatus.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isSuccess = submitStatus === SubmitStatus.SUCCESS;

  return (
    <>
      <Toast
        message={isSuccess ? SUCCESS_MESSAGE : ERROR_MESSAGE}
        type={isSuccess ? ToastType.SUCCESS : ToastType.ERROR}
        isVisible={submitStatus !== SubmitStatus.IDLE}
        onClose={closeToast}
      />

      <section
        id={SECTION_IDS.CONTACT}
        className="relative overflow-hidden border-t-2 border-ink bg-brand py-20 text-white sm:py-28"
      >
        <div
          className="bg-grid absolute inset-0 opacity-40 invert"
          aria-hidden="true"
        />
        <Container className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            <SectionHeading
              index={index}
              eyebrow="Contato"
              title={title}
              description="Envie seu projeto pelo formulário ou fale direto pelo WhatsApp. Vamos entender sua ideia e criar algo único para o seu negócio."
              tone="dark"
            />

            <Reveal className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(CONTACT_CARD_CLASS_NAME, "bg-accent")}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-xs tracking-wider uppercase">
                    WhatsApp
                  </span>
                  <span className="font-display text-xl font-extrabold sm:text-2xl">
                    {CONTACT_PHONE_DISPLAY}
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-6 w-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={cn(CONTACT_CARD_CLASS_NAME, "bg-white")}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-brand-100">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-mono text-xs tracking-wider uppercase">
                    E-mail
                  </span>
                  <span className="truncate font-display text-lg font-extrabold sm:text-xl">
                    {CONTACT_EMAIL}
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-6 w-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border-2 border-ink bg-white p-6 text-ink shadow-hard-lg sm:p-8"
            >
              <p className="font-display text-2xl font-extrabold tracking-tight">
                Conte sobre o seu projeto
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-semibold">Nome ou empresa</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={INPUT_CLASS_NAME}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">
                    Telefone / WhatsApp
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={INPUT_CLASS_NAME}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={INPUT_CLASS_NAME}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-semibold">Sobre o projeto</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Ex.: preciso de um site para minha clínica, com contato direto pelo WhatsApp..."
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(INPUT_CLASS_NAME, "resize-none")}
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isSubmitting ? "submitting" : "idle"}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="h-5 w-5 animate-spin"
                          aria-hidden="true"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="h-5 w-5" aria-hidden="true" />
                      </>
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
