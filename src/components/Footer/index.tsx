import Image from "next/image"
import ReadyToLaunchSection from "../ReadyToLaunchSection"
import { FiInstagram } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#c0c0c0] w-full min-h-[400px] h-full flex flex-col items-center pt-[50px]">
            <ReadyToLaunchSection />
            <div className="flex flex-col mt-[130px] items-center gap-4 pb-4">
                <Image src="/images/logo-1.png" width={140} height={80} alt="Logo ValeBytes" />
                <div>
                    <ul className="flex gap-4 text-primary text-xl">
                        <li><a><FiInstagram /></a></li>
                        <li><a><FiLinkedin /></a></li>
                    </ul>
                </div>
                <h4>Juazeiro - BA / Petrolina - PE</h4>
                <h4>Todos os direitos reservados à ValeBytes - 2024 &copy;</h4>
            </div>
        </footer>
    )
}