'use client'

import './navbar-component.scss';
import Link from 'next/link';
import wypeLogo from '../../../public/images/wype.svg';
import Image from 'next/image';
import { List, ShoppingCart, UserCircle, X } from '@phosphor-icons/react/dist/ssr';
import { usePathname } from 'next/navigation';
import WypeButton from '../button/button-component';
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();

    const [isNavOpen, setNavState] = useState<boolean>(false);

    return (
        <nav>
            <div className="navbar-wrapper container">
                <List className='menu' onClick={() => setNavState(!isNavOpen)} />
                <Link className="nav-logo" href={'/'}>
                    <Image src={wypeLogo} fill={true} alt='wype logo' />
                </Link>
                <div className='nav-links-list' style={{ 'left': isNavOpen ? '0px' : '-100%' }}>
                    <X className='menu-close' weight='bold' onClick={() => setNavState(!isNavOpen)} />
                    <Link onClick={() => setNavState(!isNavOpen)} className={`nav-link ${pathname === '/' ? 'nav-link-active' : ''}`} href={'/'}>HOME</Link>
                    <Link onClick={() => setNavState(!isNavOpen)} className={`nav-link ${pathname === '/services' ? 'nav-link-active' : ''}`} href={'/services'}>SERVICES</Link>
                    <Link onClick={() => setNavState(!isNavOpen)} className={`nav-link ${pathname === '/packages' ? 'nav-link-active' : ''}`} href={'/packages'}>PACKAGES</Link>
                    <Link onClick={() => setNavState(!isNavOpen)} className={`nav-link ${pathname === '/about' ? 'nav-link-active' : ''}`} href={'/about'}>ABOUT US</Link>
                    <Link onClick={() => setNavState(!isNavOpen)} className={`nav-link ${pathname === '/gallery' ? 'nav-link-active' : ''}`} href={'/gallery'}>GALLERY</Link>
                    <Link onClick={() => setNavState(!isNavOpen)} className={`nav-link ${pathname === '/contact' ? 'nav-link-active' : ''}`} href={'/contact'}>CONTACT</Link>
                    <div className="login-btn-wrapper">
                        <WypeButton buttonText='LOGIN' fontSize='16px' fontWeight='600' click={() => { }} />
                    </div>
                </div>
                <div className="nav-trailing-flex">
                    <UserCircle className='user-account' />
                    <ShoppingCart />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;