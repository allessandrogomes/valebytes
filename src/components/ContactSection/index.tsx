export default function ContactSection() {
    return (
        <section className="flex flex-wrap items-center justify-center gap-[50px] w-full max-w-full bg-contact bg-cover bg-no-repeat pb-[100px] md:pb-[200px] px-6 xl:px-0" id="contato">
            <div className="max-w-[500px] text-center lg:text-start">
                <h2 className="capitalize font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">Vamos discutir<br /> seu projeto</h2>
                <h3 className="text-base sm:text-lg md:text-xl">Preencha o formulário com suas informações e uma breve descrição do seu projeto. Entraremos em contato para discutir como podemos ajudar.</h3>
            </div>
            <form className="flex flex-col gap-4 bg-color5 w-[500px] text-color3 font-medium p-8 rounded-lg">
                <div className="flex flex-col">
                    <label>Nome/Empresa</label>
                    <input className="border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg" type="text" required />
                </div>

                <div className="flex flex-col">
                    <label>Telefone</label>
                    <input className="border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg" type="text" required />
                </div>

                <div className="flex flex-col">
                    <label>Email</label>
                    <input className="border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg" type="email" required />
                </div>

                <div className="flex flex-col">
                    <label>Conte-nos brevemente seu Projeto</label>
                    <textarea className="h-[100px] border border-color3 bg-color5 outline-none text-black font-normal p-2 rounded-lg resize-none" maxLength={500} required></textarea>
                </div>

                <button className="bg-color3 w-max self-center rounded-lg text-white p-2">Enviar</button>
            </form>
        </section>
    )
}