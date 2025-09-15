"use client";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactPage() {
    const { t } = useTranslation();
    const c = t.contact; // atalho

    return (
        <div className="w-full">
            {/* Banner */}
            <div className="relative h-96 bg-[url('/assets/gallery/10.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative w-full flex flex-col gap-2 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        {c.bannerTitle}
                    </h1>
                    <div className="flex gap-2 items-center justify-center text-white text-lg font-medium">
                        <Link href={"/"}>{c.breadcrumbHome}</Link>
                        <p>-</p>
                        <p>{c.breadcrumbContact}</p>
                    </div>
                </div>
            </div>

            <Container>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* cards + mapa */}
                    <div className="flex flex-col gap-5 justify-start items-start py-10 md:py-20 lg:px-10">
                        <div className="w-full grid grid-cols-2 grid-rows-2 gap-5">
                            <div className="rounded-lg p-5 aspect-square bg-pink-50 flex flex-col justify-center items-center">
                                <FaPhone className="size-10 text-primaryColor" />
                                <p className="font-bold text-lg pt-5">{c.cards.phone}</p>
                                <p className="text-gray-700 font-medium text-xs md:text-base text-center">+244 912 345 678</p>
                            </div>
                            <Link href={"https://wa.me/244912345678"} className="rounded-lg p-5 aspect-square bg-pink-50 flex flex-col justify-center items-center">
                                <IoLogoWhatsapp className="size-10 text-primaryColor" />
                                <p className="font-bold text-lg pt-5">{c.cards.whatsapp}</p>
                                <p className="text-gray-700 font-medium text-xs md:text-base text-center">+244 912 345 678</p>
                            </Link>
                            <Link href={"mailto:geral@ami.org.ao"} className="rounded-lg p-5 aspect-square bg-pink-50 flex flex-col justify-center items-center">
                                <FaEnvelope className="size-10 text-primaryColor" />
                                <p className="font-bold text-lg pt-5">{c.cards.email}</p>
                                <p className="text-gray-700 font-medium text-xs md:text-base text-center">geral@ami.org.ao</p>
                            </Link>
                            <div className="rounded-lg p-5 aspect-square bg-pink-50 flex flex-col justify-center items-center">
                                <FaMapMarkerAlt className="size-10 text-primaryColor" />
                                <p className="font-bold text-lg pt-5">{c.cards.location}</p>
                                <p className="text-gray-700 font-medium text-xs md:text-base text-center whitespace-pre-line">
                                    {c.cards.address}
                                </p>
                            </div>
                        </div>

                        {/* mapa */}
                        <div className="w-full min-h-72">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.977444911491!2d13.214733774780015!3d-8.974582491084579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521f28dbf07e05%3A0xc1b45c57d9661cff!2sUrbaniza%C3%A7%C3%A3o%20Boa%20Vida!5e1!3m2!1spt-PT!2sao!4v1757638965923!5m2!1spt-PT!2sao"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* formulário */}
                    <div className="py-20 w-full flex flex-col gap-5 justify-start items-start">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">{c.formTitle}</h1>
                        <p className="text-gray-600 font-semibold">{c.formDescription}</p>
                        <form className="w-full">
                            <Label className="font-normal">{c.form.name}</Label>
                            <Input placeholder={c.form.namePlaceholder} type="text" name="name" className="rounded-md w-full mt-1 p-5" />

                            <Label className="font-normal mt-5">{c.form.email}</Label>
                            <Input placeholder={c.form.emailPlaceholder} type="email" name="email" className="rounded-md w-full mt-1 p-5" />

                            <Label className="font-normal mt-5">{c.form.subject}</Label>
                            <Input placeholder={c.form.subjectPlaceholder} type="text" name="subject" className="rounded-md w-full mt-1 p-5" />

                            <Label className="font-normal mt-5">{c.form.message}</Label>
                            <Textarea placeholder={c.form.messagePlaceholder} rows={5} name="message" className="rounded-md w-full mt-1" />

                            <Button className="rounded-lg bg-primaryColor w-full mt-5 py-7 text-lg">{c.form.button}</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
