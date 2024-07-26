import Image from "next/image";

interface ICardChooseUs {
    image: string,
    title: string,
    subtitle: string
}

export default function CardChooseUs({ image, title, subtitle }: ICardChooseUs) {
    return (
        <div className="flex w-[409px] h-[134px] gap-8 mb-8">
            <div>
                <Image src={image} width={79} height={79} alt="Ícone ilustrativo" />
            </div>
            <div className="text-secondary w-[250px]">
                <h3 className="text-xl font-bold mb-0.5">{title}</h3>
                <p className="opacity-80">{subtitle}</p>
            </div>
        </div>
    )
}