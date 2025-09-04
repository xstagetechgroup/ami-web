// components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "../container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <Container>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo e endereço */}
          <div className="md:col-span-2">
            <div className="flex flex-col gap-2">
              <Image src="/assets/logo-white.png" alt="Logo" width={150} height={150} />
              <p className="text-sm leading-6">
                Main Building No. D1, Jl. Jogja-Solo, Kalasan, <br />
                Special Region of Yogyakarta
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">How it works</a></li>
              <li><a href="#" className="hover:text-white">NiceHouse for business</a></li>
              <li><a href="#" className="hover:text-white">Earn money</a></li>
              <li><a href="#" className="hover:text-white">New users FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Terms & conditions</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Handyman Services</a></li>
              <li><a href="#" className="hover:text-white">Cleaning Services</a></li>
              <li><a href="#" className="hover:text-white">Delivery Services</a></li>
              <li><a href="#" className="hover:text-white">Removalists</a></li>
              <li><a href="#" className="hover:text-white">Gardening Services</a></li>
              <li><a href="#" className="hover:text-white">Automotive</a></li>
              <li><a href="#" className="hover:text-white">Assembly Services</a></li>
              <li><a href="#" className="hover:text-white">All Services</a></li>
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
