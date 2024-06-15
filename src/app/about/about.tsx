'use client'

import Stripe from '@/components/stripe/stripe-component';
import aboutHeroImage from '../../../public/images/about-page-hero.png';
import founderImage1 from '../../../public/images/founder-1.png';
import founderImage2 from '../../../public/images/founder-2.png';
import Image from 'next/image';
import './about.scss';

const AboutPage = () => {
    return (
        <>
            <section className='about-hero-section'>
                <Image src={aboutHeroImage} priority={true} alt='wype about' fill={true}></Image>
                <div className="about-section-wrapper container">
                    <h1>Experience the Ultimate in Car Care with Wype:
                        <span>Your Premier Car Detailing Service</span>
                    </h1>
                </div>
            </section>
            <section className='about-wype-section'>
                <div className="about-wype-section-wrapper container">
                    <h2>About <span>Wype</span></h2>
                    <p className='about-description font-weight-500'>At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. That&apos;s why we&apos;ve made it our mission to revolutionize the way you keep your vehicle sparkling clean. Founded on the principles of efficiency, quality, and customer satisfaction, Wype Washing Services brings professional car washing right to your doorstep. Whether you&apos;re a busy professional, a parent juggling multiple responsibilities, or simply someone who values their time, we&apos;re here to make car maintenance hassle-free.</p>
                    <p className='about-description font-weight-500'>Our team comprises dedicated professionals who are passionate about delivering exceptional service. We use eco-friendly products and the latest techniques to ensure a thorough yet gentle clean for your vehicle, inside and out. From sedans to SUVs, we cater to all makes and models, treating each car with the care and attention it deserves.</p>
                </div>
            </section>
            <section className="founders-section">
                <div className="founders-section-wrapper container">
                    <h3>Our <span>Founders</span></h3>
                    <div className="founders-flex">

                        <div className='founder-flex-item'>
                            <div className="founder-flex-image">
                                <Image src={founderImage1} alt='Prudhvi Raj Kondagalla' fill={true}></Image>
                            </div>
                            <div className="founder-name"> <span className='font-weight-800'>-Prudhvi Raj</span> Kondagalla</div>
                        </div>
                        <div className="founder-flex-item font-weight-500">"Welcome to Wype Cleaning Services, where excellence meets innovation. As the founders, we are thrilled to embark on this journey towards becoming the premier choice in the market. Our commitment is simple: to exceed every customer's expectations with unparalleled service and attention to detail. With passion driving our every move, we promise to leave no stone unturned in ensuring your complete satisfaction. Join us as we redefine the standard of cleanliness, one delighted customer at a time."</div>
                        <div className='founder-flex-item'>
                            <div className="founder-flex-image">
                                <Image src={founderImage2} alt='Sameem Abrar' fill={true}></Image>
                            </div>
                            <div className="founder-name"><span className='font-weight-800'>-Sameem</span> Abrar</div>
                        </div>
                    </div>
                </div>
            </section>
            <Stripe />
        </>
    )
}

export default AboutPage;