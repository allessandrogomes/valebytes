import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { cities } from "@/lib/cities";
import {
  CITIES_HUB_PATH,
  cityPath,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  NAV_LINKS,
  SITE_NAME,
  SITE_REGION,
  WHATSAPP_URL,
} from "@/lib/site";
import { Container } from "../ui/Container";
import { DiamondMark } from "../ui/DiamondMark";
import { InstagramIcon } from "../icons/InstagramIcon";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

const FEATURED_CITIES_COUNT = 8;
const FOOTER_LINK_CLASS_NAME =
  "text-white/70 transition-colors hover:text-white";
const SOCIAL_LINK_CLASS_NAME =
  "flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white/30 transition-colors hover:border-accent hover:text-accent";

export function Footer() {
  const featuredCities = cities.slice(0, FEATURED_CITIES_COUNT);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-ink text-white">
      <Container className="grid gap-12 pt-16 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2.5">
            <DiamondMark className="h-7 w-auto text-brand" />
            <span className="font-display text-xl font-extrabold tracking-tight uppercase">
              {SITE_NAME}
            </span>
          </Link>
          <p className="max-w-xs text-white/70">
            Criação de sites profissionais, feitos do zero, para empresas que
            querem crescer na internet.
          </p>
          <p className="font-mono text-xs tracking-wider text-white/50 uppercase">
            {SITE_REGION}
          </p>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da ValeBytes"
              className={SOCIAL_LINK_CLASS_NAME}
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da ValeBytes"
              className={SOCIAL_LINK_CLASS_NAME}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn do desenvolvedor"
              className={SOCIAL_LINK_CLASS_NAME}
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Seções" className="flex flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Navegação
          </p>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`/#${link.id}`} className={FOOTER_LINK_CLASS_NAME}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Cidades atendidas" className="flex flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Cidades
          </p>
          <ul className="flex flex-col gap-2.5">
            {featuredCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={cityPath(city.slug)}
                  className={FOOTER_LINK_CLASS_NAME}
                >
                  Sites em {city.name} - {city.state}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={CITIES_HUB_PATH}
                className="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4"
              >
                Ver todas as cidades
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Contato
          </p>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${FOOTER_LINK_CLASS_NAME}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`flex items-center gap-2 ${FOOTER_LINK_CLASS_NAME}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        <p
          className="font-display text-[clamp(3.5rem,17vw,15rem)] leading-[0.8] font-extrabold tracking-[-0.05em] text-white/[0.06] select-none"
          aria-hidden="true"
        >
          VALEBYTES
        </p>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p>Feito com código próprio, sem template.</p>
        </Container>
      </div>
    </footer>
  );
}
