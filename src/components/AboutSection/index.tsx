/* eslint-disable @next/next/no-img-element */

export default function AboutSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full max-w-full bg-about bg-auto bg-no-repeat bg-right-top text-justify lg:text-start px-6 sm:px-0 mb-[150px] md:mb-[250px]" id="sobre">
            <h2 className="font-semibold mb-4 xl:mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Sobre Nós</h2>
            <div className="flex justify-center items-center gap-[50px] w-full max-w-full">
                <img className="hidden w-[500px] xl:block" src="/images/about-2.webp" alt="Imagem Sobre a ValeBytes" />
                <div className="max-w-[500px]">
                    <p className="text-base sm:text-lg md:text-xl">A <span className="text-color3 font-semibold">ValeBytes</span> nasceu no <span className="text-color3 font-semibold">Vale do São Francisco</span>, entre <span className="text-color3 font-semibold">Juazeiro</span> e <span className="text-color3 font-semibold">Petrolina</span>, como uma iniciativa de estudantes de <span className="text-color3 font-semibold">Engenharia de Software</span> com um propósito claro: trazer tecnologia de ponta para a região. Somos uma empresa de tecnologia especializada no desenvolvimento de páginas web, utilizando as mais recentes tecnologias e linguagens do mercado. Com um compromisso firme com a <span className="text-color3 font-semibold">Qualidade</span> e a <span className="text-color3 font-semibold">Fidelidade</span> aos projetos, nosso objetivo é preencher a lacuna de tecnologia na região e oferecer soluções inovadoras e personalizadas para nossos clientes.</p>
                </div>
            </div>
        </section>
    )
}