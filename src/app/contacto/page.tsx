"use client";

import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full">
            {/* Banner */}
            <div className="relative h-80 bg-[url('/assets/gallery/10.jpg')] bg-cover bg-center flex items-center justify-center">
                {/* Overlay escura */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Texto acima da overlay */}
                <h1 className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    Contactos
                </h1>
            </div>

            <Container>
                {/* Content */}
                <div className="w-full py-20 grid md:grid-cols-3 gap-10">
                    {/* Left Info */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6">Você nos conta. Nós ouvimos.</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primaryColor" />
                                <span>geral@ami.org.ao</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primaryColor" />
                                <span>+244 912 345 678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primaryColor" />
                                <span>Segunda a Sexta - 10:00 às 17:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-xl p-8 col-span-2">
                        <h3 className="text-lg font-semibold mb-6">
                            Tem alguma dúvida? Estamos aqui para ajudar.
                        </h3>
                        <form className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Seu Nome"
                                className="w-full border outline-none border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                            />
                            <Input
                                type="text"
                                placeholder="Assunto"
                                className="w-full border outline-none border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                className="w-full border outline-none border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                            />
                            <Textarea
                                placeholder="Mensagem"
                                rows={5}
                                className="w-full border outline-none border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                            ></Textarea>
                            <Button
                                type="submit"
                                className="bg-primaryColor hover:bg-pink-700 text-white font-medium px-6 py-2 rounded-md"
                            >
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>

            <div className="w-full h-[400px] bg-black">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.4409735977796!2d13.216976100878734!3d-8.974903441749072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521f0074260ed3%3A0x3f5e88a01526a4d8!2sGrupo%20Boavida!5e1!3m2!1spt-PT!2sao!4v1757208780915!5m2!1spt-PT!2sao"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}
