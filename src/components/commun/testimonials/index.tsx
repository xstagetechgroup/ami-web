"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import Container from "@/components/shared/container";
import { useTranslation } from "@/hooks/useTranslation";

export default function TestimonialsSection() {

    const { t } = useTranslation();
    const c = t.testimonials; // atalho

    const [open, setOpen] = useState(false);

    const testimonials = [
        {
            name: "Maria José, 34 anos, Luanda",
            testimony:
                "Antes da AMI, eu não acreditava que poderia recomeçar. Aprendi a transformar a dor em força e hoje consigo sustentar a minha família com dignidade. A AMI deu-me mais do que instrução: devolveu-me a esperança.",
        },
        {
            name: "Teresa Manuel, 41 anos, Benguela",
            testimony:
                "Participei numa das formações da AMI no mercado da minha comunidade. Descobri talentos que nem sabia que tinha e hoje tenho o meu pequeno negócio. Sinto-me mais confiante e consciente do meu valor.",
        },
        {
            name: "Joana António, 27 anos, Luanda",
            testimony:
                "Conheci a AMI dentro da cadeia. Lá, percebi que o meu passado não define o meu futuro. Hoje, estou reconstruindo a minha vida e quero ser exemplo de resiliência para outras mulheres.",
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-20">
            <Container>
                <div className="text-center">
                    {/* Título */}
                    <h2 className="text-3xl text-primaryColor text-start uppercase md:text-3xl font-extrabold mb-12">
                       {c.title}
                    </h2>

                    {/* Grid de cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} name={t.name} testimony={t.testimony} />
                        ))}
                    </div>

                    {/* Botão com modal */}
                    <div className="mt-12">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button size="lg" className="px-8 py-3 rounded-md bg-primaryColor hover:bg-transparent hover:border border-primaryColor text-white hover:text-primaryColor duration-300 shadow-lg">
                                    {c.add}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-lg">
                                <DialogHeader>
                                    <DialogTitle>{c.add}</DialogTitle>
                                </DialogHeader>
                                <form className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder={c.namePlaceholder} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder={c.emailPlaceholder} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="testemunho">Testimony</Label>
                                        <Textarea id="testemunho" placeholder={c.testimonyPlaceholder} />
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" className="bg-primaryColor rounded-md hover:bg-transparent hover:border border-primaryColor text-white hover:text-primaryColor duration-300">
                                            {c.add}
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </Container>
        </section>
    );
}
