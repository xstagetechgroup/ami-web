// components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from "../container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <Container>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo e endereço */}
          <div className="md:col-span-2">
            <div className="flex flex-col gap-2">
              <Image src="/assets/logo-white.png" alt="Logo" width={150} height={150} />
              <p className="text-sm w-full md:w-[60%]">
                Mais de 200 mil mulheres Instruídas. Uma associação sem fins lucrativos liderada pela PCA Iracelma Almeida
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <Link
                href="https://www.facebook.com/mulheresinstruidas"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/ami.ao?igsh=MTZuZnI4N3cweDZkaw=="
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="https://www.youtube.com/@IracelmaAlmeida13"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">A Associação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#sobre" className="hover:text-white">Quem Somos</Link></li>
              <li><Link href="#projectos" className="hover:text-white">Projetos</Link></li>
              <li><Link href="/noticias" className="hover:text-white">Notícias</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contactos</Link></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contactos</h3>
            <ul className="space-y-2 text-sm">
              <li>Whatsapp: <Link href="https://wa.me/244912345678" className="hover:text-white">+244 912 345 678</Link></li>
              <li>Email: <Link href="mailto:geral@ami.org.ao" className="hover:text-white">geral@ami.org.ao</Link></li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Associação de Mulheres Instruídas. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
