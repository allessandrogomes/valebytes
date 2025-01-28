import { FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-[color4] w-full flex flex-col items-center py-4 border-t-[0.5px] border-slate-800 text-center">
            <div className="flex flex-col items-center gap-2 px-6">
                <div className="flex flex-col items-center gap-1">
                    <h4>contato@valebytes.com.br</h4>
                    <h4>(74) 99939-3254</h4>
                    <a className="cursor-pointer flex gap-1 items-center" href="https://www.instagram.com/valebytes" target="_blank"><FaInstagram className="text-xl"/>Instagram</a>
                </div>
                <h4>Copyright &copy; 2025 ValeBytes - Todos os direitos reservados</h4>
            </div>
        </footer>
    )
}