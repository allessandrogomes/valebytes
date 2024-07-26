import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

interface ICard {
    image: string,
    title: string,
    subtitle: string,
    color: string,
    alt: string
}

export default function Card({ image, title, subtitle, color, alt }: ICard) {
    return (
        <div className={`flex items-center justify-center w-[350px] h-[483px] ${color} rounded-lg text-white`}>
            <div className="flex flex-col items-center justify-center gap-8">
                <Image src={image} width={118} height={133} alt={alt} />
                <h2 className="text-3xl">{title}</h2>
                <p className="text-2xl font-thin w-[296px] text-center">{subtitle}</p>
                <button className="text-xl gap-8 flex items-center mt-8">Learn more <FaArrowRight /></button>
            </div>
        </div>
    )
}