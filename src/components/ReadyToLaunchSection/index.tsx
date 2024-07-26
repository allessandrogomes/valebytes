import StartButton from "../StartButton"

export default function ReadyToLaunchSection() {
    return (
        <div className="flex flex-wrap gap-[50px] w-[70%] justify-between items-center">
            <div className="text-secondary w-[500px]">
                <h2 className="text-3xl font-bold mb-2">Ready to launch your next project?</h2>
                <p className="opacity-80">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
            </div>
            <StartButton />
        </div>
    )
} 