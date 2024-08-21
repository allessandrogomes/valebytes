import StartButton from "../StartButton"
import { FaSearchengin } from "react-icons/fa"
import { FaCheckDouble } from "react-icons/fa"
import { FaRocket } from "react-icons/fa"
import { FaTachometerAlt } from "react-icons/fa"

export default function DifferencesSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-full mb-[200px] bg-about bg-auto pt-[80px] xl:pt-[6%]" id="diferenciais">
            <div className="flex justify-center h-full border-[0.1px] border-slate-800 md:h-auto">
                <div className="flex flex-col justify-center items-center text-center py-4 md:gap-[40px] md:items-start md:text-start md:py-0 md:pl-[50px]">
                    <h2 className="font-semibold max-w-[300px] self-center text-2xl xl:leading-[80px] md:text-4xl xl:text-6xl xl:max-w-[500px]"><span className="text-tertiary font-semibold">Diferenciais</span><br/> Que Elevam Seus Projetos</h2>
                    <StartButton />
                </div>
            </div>

            <div className="grid grid-rows-2 grid-cols-2">
                <div className="bg-[#021526] h-full border-[0.1px] border-l-0 border-b-0 border-r-0 border-slate-800">
                    <div className="m-2 border-box lg:m-6">
                        <h3 className="flex gap-2 uppercase text-sm font-medium mb-4 md:text-xl"><FaSearchengin style={{ marginTop: "3px" }} />Seo</h3>
                        <p className="font-light text-sm sm:text-base">Na <span className="text-tertiary font-semibold">ValeBytes</span>, entendemos a importância do <span className="text-tertiary font-semibold">SEO</span> (Search Engine Optimization) e aplicamos essas técnicas em todos os nossos projetos. <span className="text-tertiary font-semibold">SEO</span> ajuda seu site a ser encontrado no Google, atraindo visitantes qualificados e impulsionando o sucesso do seu negócio online.</p>
                    </div>
                </div>
                <div className="bg-[#021526] h-full border-[0.1px] border-slate-800">
                    <div className="m-2 border-box lg:m-6">
                        <h3 className="flex gap-2 capitalize text-sm font-medium mb-4 md:text-xl"><FaCheckDouble style={{ marginTop: "3px" }} />Levantamento de Requisitos</h3>
                        <p className="font-light text-sm sm:text-base">Com um <span className="text-tertiary font-semibold">Levantamento De Requisitos</span> minucioso, garantimos que entendemos suas necessidades específicas. Isso nos permite entregar soluções personalizadas que atendem exatamente às suas expectativas, resultando em projetos mais eficazes.</p>
                    </div>
                </div>
                <div className="bg-[#021526] h-full border-[0.1px] border-l-0 border-slate-800">
                    <div className="m-2 border-box lg:m-6">
                        <h3 className="flex gap-2 capitalize text-sm font-medium mb-4 md:text-xl"><FaRocket style={{ marginTop: "3px" }} />Tecnologias Modernas</h3>
                        <p className="font-light text-sm sm:text-base">Usamos tecnologias avançadas como <span className="text-tertiary font-semibold">React</span> e <span className="text-tertiary font-semibold">Next.Js</span> para criar soluções modernas e eficientes. Desenvolvemos tudo com <span className="text-tertiary font-semibold">código personalizado</span>, não com plataformas genéricas, garantindo assim melhor desempenho e visibilidade para o seu site.</p>
                    </div>
                </div>
                <div className="bg-[#021526] h-full border-[0.1px] border-l-0 border-t-0 border-slate-800">
                    <div className="m-2 border-box lg:m-6">
                        <h3 className="flex gap-2 capitalize text-sm font-medium mb-4 md:text-xl"><FaTachometerAlt style={{ marginTop: "3px" }} />Performance</h3>
                        <p className="font-light text-sm sm:text-base">Priorizamos alta performance com técnicas avançadas do <span className="text-tertiary font-semibold">Next.Js</span>, como <span className="text-tertiary font-semibold">SSR</span> e <span className="text-tertiary font-semibold">SSG</span>. Essas abordagens garantem carregamento rápido e uma experiência fluida para o seu site.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}