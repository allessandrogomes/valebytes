import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

interface ICardOurServices {
    image: string,
    title: string,
    subtitle: string,
    color: string,
    alt: string,
    draw?: boolean
}

export default function CardOurServices({ image, title, subtitle, color, alt, draw = false }: ICardOurServices) {

    return (
        <div className={`flex items-center justify-center w-[350px] h-[483px] ${color} rounded-lg text-white relative`}>
            {draw && <div className="hidden sm:block bg-group101 w-[171px] h-[80px] absolute z-[-1] right-[-48px] bottom-[-50px]"></div>}
            <div className="flex flex-col items-center justify-center gap-8 text-center max-w-[90%]">
                <Image src={image} width={118} height={133} alt={alt} />
                <h2 className="text-3xl">{title}</h2>
                <p className="text-2xl font-thin w-[296px] text-center">{subtitle}</p>
                <button className="text-xl gap-8 flex items-center mt-8">Learn more <FaArrowRight /></button>
            </div>
        </div>
    )
}