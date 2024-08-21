import Image from "next/image"

export default function AboutSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full max-w-full bg-about bg-auto mb-[200px] pt-[100px] xl:pt-[8%] text-justify lg:text-start px-6 sm:px-0" id="sobre">
            <h2 className="font-semibold mb-4 text-2xl xl:mb-0 xl:text-6xl">Sobre Nós</h2>
            <div className="flex justify-center items-center gap-[50px] w-full max-w-full">
                <Image className="hidden xl:block" src="/images/about-2.webp" width={500} height={500} alt="Imagem Sobre a ValeBytes" />
                <div className="max-w-[500px]">
                    <p className="text-sm sm:text-xl">A <span className="text-tertiary font-semibold">ValeBytes</span> nasceu no <span className="text-tertiary font-semibold">Vale do São Francisco</span>, entre <span className="text-tertiary font-semibold">Juazeiro</span> e <span className="text-tertiary font-semibold">Petrolina</span>, como uma iniciativa de estudantes de <span className="text-tertiary font-semibold">Engenharia de Software</span> com um propósito claro: trazer tecnologia de ponta para a região. Somos uma empresa de tecnologia especializada no desenvolvimento de páginas web, utilizando as mais recentes tecnologias e linguagens do mercado. Com um compromisso firme com a <span className="text-tertiary font-semibold">Qualidade</span> e a <span className="text-tertiary font-semibold">Fidelidade</span> aos projetos, nosso objetivo é preencher a lacuna de tecnologia na região e oferecer soluções inovadoras e personalizadas para nossos clientes.</p>
                </div>
            </div>
        </section>
    )
}