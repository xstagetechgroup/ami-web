"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import Container from "@/components/shared/container";

export default function TestimonialsSection() {
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
                        <h2 className="text-3xl text-primaryColor text-start uppercase md:text-4xl font-extrabold mb-12">
                            O que as pessoas dizem
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
                                        Adicionar Testemunho
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-lg">
                                    <DialogHeader>
                                        <DialogTitle>Adicionar Testemunho</DialogTitle>
                                    </DialogHeader>
                                    <form className="space-y-4">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="name">Nome</Label>
                                            <Input id="name" placeholder="Seu nome" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="Seu email" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="testemunho">Testemunho</Label>
                                            <Textarea id="testemunho" placeholder="Escreva seu testemunho..." />
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit" className="bg-primaryColor rounded-md hover:bg-transparent hover:border border-primaryColor text-white hover:text-primaryColor duration-300">
                                                Enviar
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
