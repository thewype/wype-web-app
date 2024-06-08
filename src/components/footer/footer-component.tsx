import './footer-component.scss'
import { MetaLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import Link from 'next/link';
import wypeIcon from '../../../public/images/wype.svg';


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="footer-wrapper container">
                <div className="footer-content-flex">
                    <div className="footer-section">
                        <div className="footer-title font-weight-500">ABOUT</div>
                        <div className='footer-meta'>
                            <div className="footer-description">At Wype Washing Services, we believe that a clean car isn&apos;t just about aesthetics; it&apos;s about pride, comfort, and longevity.</div>
                            <div className='footer-image-wrapper'>
                                <Image src={wypeIcon} alt='thewype' fill={true}></Image>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section section-links">
                        <div className="footer-title font-weight-500">SERVICES</div>
                        <div className="links-wrapper">
                            <Link className='footer-link' href={''}>Exterior Hand Wash</Link>
                            <Link className='footer-link' href={''}>Tower Hand Dry</Link>
                            <Link className='footer-link' href={''}>Tire Dressing</Link>
                            <Link className='footer-link' href={''}>Wheel Shine</Link>
                            <Link className='footer-link' href={''}>Interior Vaccum</Link>
                            <Link className='footer-link' href={''}>Sealer Hand Wax</Link>
                        </div>
                    </div>

                    <div className="footer-section section-links">
                        <div className="footer-title font-weight-500">COMPANY</div>
                        <div className="links-wrapper">
                            <Link className='footer-link' href={''}>About Us</Link>
                            <Link className='footer-link' href={''}>Gallery</Link>
                            <Link className='footer-link' href={''}>Packages</Link>
                            <Link className='footer-link' href={''}>Book Your Wash</Link>
                            <Link className='footer-link' href={''}>Our Services</Link>
                            <Link className='footer-link' href={''}>Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="mobile-footer-links">
                    <Link className='mobile-link font-weight-500' href={''}>SERVICES</Link>
                    <Link className='mobile-link font-weight-500' href={''}>PACKAGES</Link>
                    <Link className='mobile-link font-weight-500' href={''}>GALLERY</Link>
                </div>


                <div className="footer-bottom">
                    <div className="social-flex">
                        <a href=""><MetaLogo className='social-icon'/></a>
                        <a href=""><InstagramLogo className='social-icon'/></a>
                    </div>
                    <div className="footer-txt">{year} Wype - REVIVE - RIDE - RAPTURE</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;