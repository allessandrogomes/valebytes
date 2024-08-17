import StartButton from "../StartButton"

export default function ReadyToLaunchSection() {
    return (
        <div className="flex flex-wrap gap-[50px] w-[70%] justify-between items-center">
            <div className="text-secondary w-[500px]">
                <h2 className="text-3xl font-bold mb-2">Pronto para lançar seu próximo projeto?</h2>
                <p className="opacity-80 text-xl">Vamos transformar suas ideias em realidade. Fale conosco hoje mesmo!</p>
            </div>
            <StartButton />
        </div>
    )
} 