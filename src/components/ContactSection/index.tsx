'use client'

import { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function ContactSection() {

    const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmittedSucessfully, setIsSubmittedSucessfully] = useState<any>(null)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)
        setIsSubmittedSucessfully(null)

        const response = await fetch("https://valebytes-api.vercel.app/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            setIsSubmittedSucessfully(true)
            setIsSubmitting(false)
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: ""
            })
        } else {
            setTimeout(() => {
                setIsSubmittedSucessfully(false)
                setIsSubmitting(false)
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    message: ""
                })
            }, 3000)
        }
    }

    useEffect(() => {
        if (isSubmittedSucessfully === true) {
            setTimeout(() => {
                setIsSubmittedSucessfully(null)
            }, 5000)
        }
    }, [isSubmittedSucessfully])

    return (
        <section className="flex flex-wrap items-center justify-center gap-[50px] w-full max-w-full bg-contact bg-cover bg-no-repeat pb-[100px] md:pb-[200px] px-6 xl:px-0" id="contato">
            <div className="max-w-[500px] text-center lg:text-start">
                <h2 className="capitalize font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">Vamos discutir<br /> seu Site</h2>
                <h3 className="text-base sm:text-lg md:text-xl">Preencha o formulário com suas informações e uma breve descrição do seu projeto. Entraremos em contato para discutir como podemos ajudar.</h3>
            </div>
            <form onSubmit={e => handleSubmit(e)} className="flex flex-col gap-4 bg-color5 w-[500px] text-color3 font-medium p-8 rounded-lg">
                <div className="flex flex-col">
                    <label>Nome/Empresa</label>
                    <input onChange={handleChange} value={formData.name} name="name" className="border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg" type="text" required />
                </div>

                <div className="flex flex-col">
                    <label>Telefone</label>
                    <input onChange={handleChange} value={formData.phone} name="phone" className="border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg" type="text" required />
                </div>

                <div className="flex flex-col">
                    <label>Email</label>
                    <input onChange={handleChange} value={formData.email} name="email" className="border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg" type="email" required />
                </div>

                <div className="flex flex-col">
                    <label>Conte-nos brevemente seu Projeto</label>
                    <textarea onChange={handleChange} value={formData.message} name="message" className="h-[100px] border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg resize-none" maxLength={500} required></textarea>
                </div>

                <button disabled={isSubmitting} type="submit" className={`${isSubmitting ? "bg-[#cccccc]" : "bg-color3"} w-max self-center rounded-lg text-white p-2`}>
                    {isSubmitting
                        ?
                        <p className="flex gap-2 items-center">Enviando <AiOutlineLoading3Quarters className="spinner" style={{ animation: 'spin 1s linear infinite' }} /></p>
                        :
                        "Enviar"
                    }
                </button>

                {isSubmittedSucessfully === false && (
                    <p className="self-center text-red-600">Não foi possível enviar o formulário. Tente novamente.</p>
                )}

                {isSubmittedSucessfully === true && (
                    <p className="self-center">Enviado com sucesso, entraremos em contato!</p>
                )}
            </form>
        </section>
    )
}