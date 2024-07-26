interface ICardCaseStudies {
    height: number,
    image: string,
    title: string,
    subtitle: string
}

export default function CardCaseStudies({ height, image, title, subtitle }: ICardCaseStudies) {
    return (
        <div style={{ height: `${height}px` }} className={`flex flex-col justify-between w-[400px] rounded-xl text-secondary`}>
            <div style={{ backgroundImage: `url('${image}')` }} className="bg-cover h-[80%] rounded-xl"></div>
            <div className="ml-4">
                <h3 className="opacity-80 text-lg">{title}</h3>
                <h4 className="text-2xl font-bold">{subtitle}</h4>
            </div>
        </div>
    )
}