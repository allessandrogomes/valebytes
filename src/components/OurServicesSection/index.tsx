import TitleSubtitle from "../TitleSubtitle"
import Card from "./Card"

export default function OurServicesSection() {
    return (
        <div className="flex flex-col gap-[100px] items-center mt-[100px]">
            <TitleSubtitle title="Our Services" subtitle="We provide great services for our customers based on needs"/>
            <div className="flex gap-8">
                <Card 
                    image="/images/designer-rafiki.png" 
                    title="Graphic Design"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                    color="bg-green-400" 
                    alt="Imagem ilustrativa Designer"
                />
                <Card 
                    image="/images/programming-rafiki.png" 
                    title="Web Development"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                    color="bg-indigo-700"
                    alt="Imagem ilustrativa Designer"
                />
                <Card 
                    image="/images/notes-rafiki.png" 
                    title="Content Writing"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                    color="bg-red-500" 
                    alt="Imagem ilustrativa Designer"
                />
            </div>
        </div>
    )
}