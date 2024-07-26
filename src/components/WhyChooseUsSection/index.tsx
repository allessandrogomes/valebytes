import ReadyToLaunchSection from "../ReadyToLaunchSection";
import TitleSubtitle from "../TitleSubtitle";
import CardChooseUs from "./CardChooseUs";

export default function WhyChooseUsSection() {
    return (
        <section className="flex flex-col items-center py-[100px] gap-[100px] relative bg-tertiary w-full max-580:px-[40px]">
            <TitleSubtitle title="Why choose us" subtitle="People choose us because we serve the best for everyone" />
            <div className="flex flex-wrap w-[75%] justify-center max-580:gap-y-[50px]">
                <CardChooseUs
                    image="/images/people-icon.png"
                    title="Dedicated project manager"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
                />
                <CardChooseUs
                    image="/images/square-icon.png"
                    title="Organized tasks"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
                />
                <CardChooseUs
                    image="/images/chat-icon.png"
                    title="Easy feedback sharing"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
                />
                <CardChooseUs
                    image="/images/deadline-icon.png"
                    title="Never miss deadline"
                    subtitle="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
                />
            </div>
            <div className="bg-black w-[70%] h-[1px] opacity-10"></div>
            <ReadyToLaunchSection />
        </section>
    )
}