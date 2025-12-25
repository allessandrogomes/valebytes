"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Toast } from "./Toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSucessfully, setIsSubmittedSucessfully] = useState<
    boolean | null
  >(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmittedSucessfully(null);

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmittedSucessfully(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setIsSubmittedSucessfully(false);
        console.error("Erro na resposta:", data.message);
      }
    } catch (error) {
      setIsSubmittedSucessfully(false);
      console.error("Erro na requisição:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isSubmittedSucessfully === true) {
      setTimeout(() => {
        setIsSubmittedSucessfully(null);
      }, 5000);
    }
  }, [isSubmittedSucessfully]);

  return (
    <>
      <Toast
        message={
          isSubmittedSucessfully === true
            ? "Email enviado com sucesso! Entraremos em contato em breve."
            : isSubmittedSucessfully === false
              ? "Erro ao enviar email. Tente novamente ou entre em contato pelo WhatsApp."
              : ""
        }
        type={isSubmittedSucessfully === true ? "success" : "error"}
        isVisible={isSubmittedSucessfully !== null}
        onClose={() => setIsSubmittedSucessfully(null)}
      />
      <section id="contato" className="bg-[#3A5DFF] py-12 md:py-20">
        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-20 xl:mx-40 flex flex-col gap-8 md:gap-12">
          {/* Título da seção */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#EEEEEE] mb-3 md:mb-4">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#EEEEEE] opacity-90">
              Envie seu projeto pelo formulário ou fale diretamente pelo
              WhatsApp. Estamos prontos para entender sua ideia e criar algo
              único para o seu negócio.
            </p>
          </div>

          {/* Conteúdo principal */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            {/* Formulário */}
            <div className="bg-[#EEEEEE] rounded-lg p-6 sm:p-8 flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-black">
                Envie sua mensagem e entraremos em contato
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 md:gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nome/Empresa"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A5DFF] text-black text-sm sm:text-base"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A5DFF] text-black text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A5DFF] text-black text-sm sm:text-base"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Conte-nos brevemente seu Projeto"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A5DFF] text-black resize-none text-sm sm:text-base"
                  required
                />
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-[#3A5DFF] text-[#EEEEEE] p-2 sm:p-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#3a5effe1] transition-all duration-300 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-500"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            </div>

            {/* Separador OU */}
            <div className="hidden lg:flex items-center justify-center self-center">
              <span className="text-[#EEEEEE] text-xl md:text-2xl font-bold">
                OU
              </span>
            </div>

            {/* Informações de contato */}
            <div className="flex-1 w-full text-[#EEEEEE] self-center">
              <p className="mb-3 md:mb-4 text-sm sm:text-base md:text-lg font-semibold">
                Fale conosco por um desses contatos:
              </p>
              <div className="flex flex-col gap-2 md:gap-3">
                <a
                  href="https://wa.me/5574999393254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity text-sm sm:text-base"
                >
                  <svg
                    width="20"
                    height="20"
                    className="sm:w-6 sm:h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp: (74) 99939-3254</span>
                </a>
                <a
                  href="mailto:contato@valebytes.com.br"
                  className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity text-sm sm:text-base"
                >
                  <Mail />
                  <span>Email: contato@valebytes.com.br</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
