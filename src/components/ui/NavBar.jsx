'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [sectionMouseOver, setSectionMouseOver] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='navbar mw-950'>
            <Link onClick={() => setMenuOpen(false)} href="/">
                <Image
                    src="/images/logo.svg"//TODO: utilizar el url absoluto
                    alt="Logo de tracto agro vial"
                    width={165}
                    height={29}
                    className='navbar__logo'
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
                        <Link onClick={() => setMenuOpen(false)} href="/" className='nav__link nav__link--home'>
                            <svg width={30} height={30} className='nav__home' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.37 30">
                                <g>
                                    <g>
                                        <path d="m16.88.65c-.96-.87-2.42-.87-3.39,0L0,12.79v13.16c0,2.24,1.81,4.05,4.05,4.05h22.27c2.24,0,4.05-1.81,4.05-4.05h0v-13.16L16.88.65Zm2.1,26.82h-7.59v-6.36c0-2.1,1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8v6.36Zm8.86-1.52c0,.84-.68,1.52-1.52,1.52h-4.81v-6.36c0-3.49-2.83-6.33-6.33-6.33s-6.33,2.83-6.33,6.33v6.36h-4.81c-.84,0-1.52-.68-1.52-1.52h0v-12.03L15.18,2.53l12.65,11.39v12.03Z" />
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </li>
                    <li onMouseOver={() => setSectionMouseOver('institucional')} onMouseLeave={() => setSectionMouseOver('')} className='nav__item--translate'>
                        <Link onClick={() => setMenuOpen(false)} href="/institucional/" className='nav__link'>
                            <div className='nav__section'>
                                <span className='nav__linktext'>Institucional</span>
                                <svg className='nav__arrow' width={15} height={15} viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.73 0.650002C10.45 0.370002 10 0.370002 9.72001 0.650002L6.45001 3.92C6.17001 4.2 5.72001 4.2 5.44001 3.92L2.17001 0.650002C1.89001 0.370002 1.44001 0.370002 1.16001 0.650002C0.880012 0.930002 0.880012 1.38 1.16001 1.66L4.44001 4.94C5.28001 5.78 6.63001 5.78 7.47001 4.94L10.75 1.66C11.03 1.38 11.03 0.930002 10.75 0.650002H10.73Z" />
                                </svg>
                            </div>
                        </Link>
                        <div className={`nav__subsection ${sectionMouseOver === 'institucional' ? 'nav__subsection--show' : ''}`}>
                            <ul className="sub_nav">
                                <li className="sub_nav__item"><Link onClick={() => setMenuOpen(false)} href="/institucional#route" className='nav__link'>Recorrido</Link></li>
                                <li className="sub_nav__item"><Link onClick={() => setMenuOpen(false)} href="/institucional#workHere" className='nav__link'>Trabaja Con Nosotros</Link></li>
                                <li className="sub_nav__item"><Link onClick={() => setMenuOpen(false)} href="/institucional#branches" className='nav__link'>Sucursales</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpen(false)} href="/posventa" className='nav__link'>
                            <span className='nav__linktext'>PosVenta</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}