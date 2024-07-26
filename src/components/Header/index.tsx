import Image from "next/image";
import StartButton from "../Buttons/Start";

export default function Header() {
    return (
        <header className="flex w-full h-[80px] justify-center absolute">
            <div className="flex justify-between items-center w-[80%] text-xl font-medium">
                <div className="flex items-center gap-10">
                    <Image src="/images/logo-1.png" width={180} height={45} alt="Logo ValeBytes" />
                    <nav className="flex justify-between w-[333px] mt-1.5">
                        <a>Demos</a>
                        <a>Pages</a>
                        <a>Support</a>
                        <a>Contact</a>
                    </nav>
                </div>
                <StartButton />
            </div>
        </header>
    )
}