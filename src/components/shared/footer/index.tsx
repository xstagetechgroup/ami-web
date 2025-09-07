// components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "../container";

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
              <a
                href="https://www.facebook.com/mulheresinstruidas"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/associacaomulheresinstruidas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@IracelmaAlmeida13"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>

          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">A Associação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Quem Somos</a></li>
              <li><a href="#" className="hover:text-white">Projetos</a></li>
              <li><a href="#" className="hover:text-white">Conheça a Associação</a></li>
              <li><a href="/contacto" className="hover:text-white">Contactos</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contactos</h3>
            <ul className="space-y-2 text-sm">
              <li>Whatsapp: <a href="#" className="hover:text-white">+244 912 345 678</a></li>
              <li>Email: <a href="#" className="hover:text-white">geral@ami.org.ao</a></li>
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
