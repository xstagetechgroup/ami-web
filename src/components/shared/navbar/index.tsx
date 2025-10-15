'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Container from '../container'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useTranslation } from '@/hooks/useTranslation'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { t, changeLanguage } = useTranslation()
    const pathname = usePathname()

    const notices = pathname.includes('noticias');
    const gallery = pathname.includes('galeria');
    const contact = pathname.includes('contacto');
    const team = pathname.includes('equipa');

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <div className='w-full bg-white shadow-md sticky top-0 left-0 z-50'>
            <Container>
                <div className='w-full flex justify-between items-center'>
                    <Link href={'/'}><Image src={'/assets/logo-horizontal.png'} alt='Logo' width={200} height={200} className='w-44' /></Link>

                    {/* Botão menu mobile */}
                    <button className='lg:hidden' onClick={toggleMenu}>
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>

                    {/* Menu desktop */}
                    <ul className='hidden lg:flex font-semibold text-gray-700 flex-row items-center gap-10 text-base'>
                        <li className='hover:text-primaryColor duration-200'><Link href={'/'}>{t.navbar.home}</Link></li>
                        <li className={`hover:text-primaryColor duration-200 ${team && 'text-primaryColor'}`}><Link href={'/equipa'}>{t.navbar.about}</Link></li>
                        <li className={`hover:text-primaryColor duration-200 ${notices && 'text-primaryColor'}`}><Link href={'/noticias'}>{t.navbar.news}</Link></li>
                        <li className={`hover:text-primaryColor duration-200 ${gallery && 'text-primaryColor'}`}><Link href={'/galeria'}>{t.navbar.gallery}</Link></li>
                        <li className={`hover:text-primaryColor duration-200 ${contact && 'text-primaryColor'}`}><Link href={'/contacto'}>{t.navbar.contact}</Link></li>
                        <div className='flex gap-2 items-center'>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='outline-none'>
                                    <span className='flex gap-2 items-center border capitalize bg-white text-black font-bold border-primaryColor px-4 py-1 rounded-sm hover:bg-primaryColor group duration-200'>
                                        <p className='duration-200 group-hover:text-white'>{t.navbar.language}</p>
                                        <MdKeyboardArrowDown className='text-black' />
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => changeLanguage('pt')} className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/angola.png'} className='rounded' alt='Português' width={20} height={20} />
                                        <p>Português</p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('en')} className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/england.jpg'} className='rounded' alt='English' width={20} height={20} />
                                        <p>English</p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('fr')} className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/france.webp'} className='rounded' alt='Français' width={20} height={20} />
                                        <p>Français</p>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </ul>
                </div>

                {/* Menu mobile */}
                {menuOpen && (
                    <ul className='lg:hidden flex flex-col gap-6 pb-6 text-center uppercase text-base'>
                        <li><Link href={'/'} onClick={toggleMenu} className='hover:text-primaryColor duration-200'>{t.navbar.home}</Link></li>
                        <li><Link href={'/equipa'} onClick={toggleMenu} className={`hover:text-primaryColor duration-200 ${team && 'text-primaryColor'}`}>{t.navbar.about}</Link></li>
                        <li><Link href={'/noticias'} onClick={toggleMenu} className={`hover:text-primaryColor duration-200 ${notices && 'text-primaryColor'}`}>{t.navbar.news}</Link></li>
                        <li><Link href={'/galeria'} onClick={toggleMenu} className={`hover:text-primaryColor duration-200 ${gallery && 'text-primaryColor'}`}>{t.navbar.gallery}</Link></li>
                        <li><Link href={'/contacto'} onClick={toggleMenu} className={`hover:text-primaryColor duration-200 ${contact && 'text-primaryColor'}`}>{t.navbar.contact}</Link></li>
                        <div className='flex gap-2 items-center justify-center w-full'>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='outline-none'>
                                    <span className='flex gap-2 items-center border capitalize font-bold border-primaryColor px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                                        <p className='duration-200 group-hover:text-white'>{t.navbar.language}</p>
                                        <MdKeyboardArrowDown className='text-black' />
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => changeLanguage('pt')} className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/angola.png'} className='rounded' alt='Português' width={20} height={20} />
                                        <p>Português</p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('en')} className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/england.jpg'} className='rounded' alt='English' width={20} height={20} />
                                        <p>English</p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('fr')} className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/france.webp'} className='rounded' alt='Français' width={20} height={20} />
                                        <p>Français</p>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </ul>
                )}
            </Container>
        </div>
    )
}

export default Navbar
