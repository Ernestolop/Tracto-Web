'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='navbar mw-950'>
            <Link href="/" className='navbar__logo'>
                <Image
                    src="/images/tracto_agro_vial_logo.png"//TODO: utilizar el url absoluto
                    alt="Logo de tracto agro vial"
                    width={200}
                    height={36}
                />
            </Link>
            <nav className='nav'>
                <button onClick={toggleMenu} type='button' aria-label={`${menuOpen ? 'Close Menu' : 'Open Menu'}`}>
                    {
                        menuOpen ?
                            (
                                <svg className='nav__hamburger' width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            )
                            :
                            (
                                <svg className='nav__hamburger' width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                            )

                    }
                </button>
                <ul className={`nav__ul ${menuOpen ? '' : 'nav__ul--mdhide'}`}>
                    <li>
                        <Link href="/" className='nav__link'>Inicio</Link>
                    </li>
                    <li>
                        <Link href="/institucional" className='nav__link'>Institucional</Link>
                    </li>
                    <li>
                        <Link href="/posventa" className='nav__link'>PosVenta</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}