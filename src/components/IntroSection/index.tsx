import StartButton from "../Buttons/Start";

export default function IntroSection() {
    return (
        <section className="flex justify-center bg-home bg-cover w-full h-[700px]">
            <div className="flex items-center justify-around w-full h-[550px] mt-[130px]">
                <div className="flex flex-col gap-6 w-[420px]">
                    <h3 className="uppercase text-primary font-bold">Let&apos;s Shift Your Business</h3>
                    <h2 className="text-6xl font-bold text-secondary">Shift your business fast with Shade Pro</h2>
                    <p className="text-xl text-secondary opacity-80">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                    <StartButton />
                </div>
                <div className="w-[520px] h-[500px] relative">
                    <div className="bg-fill w-[107px] h-[107px] left-[110px] absolute"></div>
                    <div className="bg-work bg-cover w-[460px] h-[460px] rounded-full absolute top-[20px] right-[20px]"></div>
                    <div className="bg-round bg-no-repeat bg-contain w-[125px] h-[125px] absolute bottom-[20px] left-[60px]"></div>
                    <div className="bg-waves w-[25px] h-[79px] absolute bottom-[70px] right-[50px]"></div>
                </div>
            </div>
        </section>
    )
} 