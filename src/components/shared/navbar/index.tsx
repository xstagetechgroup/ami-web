'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Container from '../container'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from '@/components/ui/button'

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <div className='w-full bg-white  shadow-md sticky top-0 left-0 z-50'>
            <Container>
                <div className='w-full flex justify-between items-center'>
                    <Link href={'/'}><Image src={'/assets/logo-horizontal.png'} alt='Logo' width={200} height={200} className='w-44' /></Link>

                    {/* Botão menu mobile */}
                    <button className='lg:hidden' onClick={toggleMenu}>
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>

                    {/* Menu desktop */}
                    <ul className='hidden lg:flex font-semibold text-gray-700 flex-row items-center gap-10 text-base'>
                        <li className='hover:text-primaryColor duration-200'><Link href={'/'}>Home</Link></li>
                        <li className='hover:text-primaryColor duration-200'><Link href={'/sobre'}>Quem Somos</Link></li>
                        <li className='hover:text-primaryColor duration-200'><Link href={'#projectos'}>Projectos</Link></li>
                        <li className='hover:text-primaryColor duration-200'><Link href={'/conheca'}>Conheça a Associação</Link></li>
                        <li className='hover:text-primaryColor duration-200'><Link href={'/contacto'}>Contacto</Link></li>
                        <div className='flex gap-2 items-center'>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='outline-none'>
                                    <span className='flex gap-2 items-center border capitalize bg-white text-black font-bold border-primaryColor px-4 py-1 rounded-sm hover:bg-primaryColor group duration-200'>
                                        <p className='duration-200 group-hover:text-white'>Português</p>
                                        <MdKeyboardArrowDown className='text-black' />
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/angola.png'} className='rounded' alt='Português' width={20} height={20} />
                                        <p>Português</p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/england.jpg'} className='rounded' alt='English' width={20} height={20} />
                                        <p>English</p>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </ul>
                </div>

                {/* Menu mobile */}
                {menuOpen && (
                    <ul className='lg:hidden flex flex-col gap-6 pb-6 text-center uppercase text-base'>
                        <li><Link href='/' onClick={toggleMenu} className='hover:text-primaryColor duration-200'>HOME</Link></li>
                        <li><Link href='/sobre' onClick={toggleMenu} className='hover:text-primaryColor duration-200'>QUEM SOMOS</Link></li>
                        <li><Link href='/projectos' onClick={toggleMenu} className='hover:text-primaryColor duration-200'>PROJECTOS</Link></li>
                        <li><Link href='/conheca' onClick={toggleMenu} className='hover:text-primaryColor duration-200'>CONHEÇA A ASSOCIAÇÃO</Link></li>
                        <li><Link href='/contacto' onClick={toggleMenu} className='hover:text-primaryColor duration-200'>CONTACTO</Link></li>
                        <div className='flex gap-2 items-center'>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='outline-none'>
                                    <span className='flex gap-2 items-center border capitalize font-bold border-primaryColor px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                                        <p className='duration-200 group-hover:text-white'>Português</p>
                                        <MdKeyboardArrowDown className='text-black' />
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/angola.png'} className='rounded' alt='Português' width={20} height={20} />
                                        <p>Português</p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='flex gap-2 items-center py-2 pr-10 outline-none cursor-pointer'>
                                        <Image src={'/assets/flags/england.jpg'} className='rounded' alt='English' width={20} height={20} />
                                        <p>English</p>
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
