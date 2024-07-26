interface IOurServicesSection {
    title: string,
    subtitle: string
}

export default function TitleSubtitle({ title, subtitle }: IOurServicesSection) {
    return (
        <div className="flex flex-col gap-4 max-w-[521px] text-center">
            <h1 className="font-bold text-lg uppercase text-primary">{title}</h1>
            <h2 className="text-secondary font-bold text-4xl">{subtitle}</h2>
        </div>
    )
}