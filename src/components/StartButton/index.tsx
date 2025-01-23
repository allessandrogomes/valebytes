'use client'

import { Link } from "react-scroll"

export default function StartButton() {
    return (
        <Link
            role="button"
            aria-label="Scroll to respective Section"
            to="contato"
            spy
            smooth
            offset={-100}
            duration={50}
            className="bg-color1 py-2 px-4 rounded-lg text-two text-base font-medium cursor-pointer"
        >
            Criar site
        </Link>
    )
}