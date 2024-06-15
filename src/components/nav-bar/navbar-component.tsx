'use client'

import './navbar-component.scss';
import Link from 'next/link';
import wypeLogo from '../../../public/images/wype.svg';
import Image from 'next/image';
import { ShoppingCart, UserCircle } from '@phosphor-icons/react/dist/ssr';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
            <div className="navbar-wrapper container">
                <div className="nav-logo">
                    <Image src={wypeLogo} fill={true} alt='wype logo'  />
                </div>
                <div className='nav-links-list'>
                    <Link className={`nav-link ${pathname === '/' ? 'nav-link-active' : ''}`} href={'/'}>HOME</Link>
                    <Link className={`nav-link ${pathname === '/services' ? 'nav-link-active' : ''}`} href={'/services'}>SERVICES</Link>
                    <Link className={`nav-link ${pathname === '/packages' ? 'nav-link-active' : ''}`} href={'/packages'}>PACKAGES</Link>
                    <Link className={`nav-link ${pathname === '/about' ? 'nav-link-active' : ''}`} href={'/about'}>ABOUT US</Link>
                    <Link className={`nav-link ${pathname === '/gallery' ? 'nav-link-active' : ''}`} href={'/gallery'}>GALLERY</Link>
                    <Link className={`nav-link ${pathname === '/contact' ? 'nav-link-active' : ''}`} href={'/contact'}>CONTACT</Link>
                </div>
                <div className="nav-trailing-flex">
                    <UserCircle />
                    <ShoppingCart />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;