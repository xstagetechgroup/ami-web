'use client'
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const RecruitmentPage: React.FC = () => {
    const [cvFile, setCvFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type !== 'application/pdf') {
            alert('Por favor selecione apenas arquivos PDF.');
            e.target.value = ''; // limpa input
            return;
        }
        setCvFile(file || null);
    };

    return (
        <div className="w-full">
            {/* HERO */}
            <div className="w-full h-[350px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
                <h1 className="text-4xl font-bold text-center uppercase">OPORTUNIDADES DE EMPREGO</h1>
                <div className="flex items-center justify-center gap-2">
                    <Link className="hover:underline duration-300" href={"/"}>
                        Home
                    </Link>
                    <p>-</p>
                    <p>Oportunidade de emprego</p>
                </div>
            </div>

            <Container>
                <div className="py-20 my-20 rounded-xl bg-gray-200 flex flex-col md:flex-row items-center justify-center p-8">
                    {/* Lado Esquerdo */}
                    <div className="text-black md:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold">Conectamos talentos a oportunidades reais de trabalho!</h1>
                        <p className='text-gray-800 text-base font-semibold'>Esta página foi criada para ajudar você a fazer sua necessidade de emprego chegar até empresas que estão contratando. Nosso objetivo é facilitar o encontro entre quem busca uma chance no mercado e quem está à procura de profissionais dedicados.</p>
                        <p className='text-gray-800 text-base font-semibold'>Preencha seu perfil e fique visível para empregadores que estão em busca de alguém como você.</p>
                        <div className="text-sm mt-4 flex flex-col gap-4 w-full">
                            <p>Caso prefira entrar em contato por email, envie uma mensagem para:</p>
                            <div className='flex'>
                                <Link href="mailto:geral@ami.org.ao">
                                    <span className='flex gap-2 items-center border bg-transparent text-black font-bold border-primaryColor px-4 py-1 rounded-sm hover:bg-primaryColor group duration-200'>
                                        <ArrowRight className='text-black size-3 group-hover:text-white duration-200' />
                                        <p className='duration-200 group-hover:text-white pb-1'>geral@ami.org.ao</p>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito - Formulário */}
                    <div className="bg-white rounded-2xl p-6 md:w-1/2 w-full mt-8 md:mt-0 md:ml-8 shadow-lg">
                        <h2 className="text-xl font-semibold mb-4 text-center">Envie seu Currículo</h2>
                        <form className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Nome Completo"
                                className="w-full p-5 border rounded-md"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                className="w-full p-5 border rounded-md"
                            />
                            <Textarea
                                placeholder="Conte-nos sobre você e suas metas"
                                rows={4}
                                className="w-full p-5 border rounded-md"
                            ></Textarea>
                            <Input
                                type="file"
                                accept="application/pdf"
                                onChange={handleFileChange}
                                className="w-full text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            <Button
                                type="submit"
                                className="w-full bg-primaryColor text-white px-6 py-5 rounded-md font-semibold shadow-md transition mt-5"
                            >
                                Enviar Candidatura
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RecruitmentPage;
