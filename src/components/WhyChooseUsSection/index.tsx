import ReadyToLaunchSection from "../ReadyToLaunchSection";
import TitleSubtitle from "../TitleSubtitle";
import CardChooseUs from "./CardChooseUs";

export default function WhyChooseUsSection() {
    return (
        <section className="flex flex-col items-center py-[100px] gap-[100px] relative bg-tertiary w-full max-580:px-[40px]">
            <TitleSubtitle title="Porque escolher-nos" subtitle="As pessoas nos escolhem porque servimos o melhor para todos" />
            <div className="flex flex-wrap w-[75%] justify-center max-580:gap-y-[50px]">
                <CardChooseUs
                    image="/images/people-icon.png"
                    title="Gerente de projetos dedicado"
                    subtitle="Acompanhamento personalizado para garantir o sucesso do seu projeto."
                />
                <CardChooseUs
                    image="/images/square-icon.png"
                    title="Tarefas organizadas"
                    subtitle="Gerenciamos cada etapa do projeto com precisão e clareza."
                />
                <CardChooseUs
                    image="/images/chat-icon.png"
                    title="Fácil compartilhamento de feedback"
                    subtitle="Comunicação simples e direta para aprimorar o desenvolvimento contínuo."
                />
                <CardChooseUs
                    image="/images/deadline-icon.png"
                    title="Nunca perdemos o prazo"
                    subtitle="Comprometidos com entregas pontuais, sempre."
                />
            </div>
            <div className="bg-black w-[70%] h-[1px] opacity-10"></div>
            <ReadyToLaunchSection />
        </section>
    )
}