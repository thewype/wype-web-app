'use client'

import './services.scss';
import Image from 'next/image';
import servicesHeroImg from '../../../public/images/services-hero.png';
import whyChooseWypeImg from '../../../public/images/why-choose-wype.png';
import WypeButton from '@/components/button/button-component';
import redSeatIcon from '../../../public/images/red-seat.svg';
import steamCarWash from '../../../public/images/steam-car-wash.png';
import interiorDryCleaning from '../../../public/images/interior-cleaning-dry.png';
import glassTreatment from '../../../public/images/glass-treatment.png';
import alloyCoating from '../../../public/images/alloy-cleaning.png';
import engineCoating from '../../../public/images/engine-coating.png';
import hardWaterSpotRemoval from '../../../public/images/hard-water-spot-removal.png';
import tarGlueRemoval from '../../../public/images/tar-glue-removal.png';
import headLightRestoration from '../../../public/images/head-light-restoration.png';
import waxing from '../../../public/images/waxing.png';
import fabricCoating from '../../../public/images/fabric-coating.png';
import leatherConditioning from '../../../public/images/leather-coating.png';
import acVentCleaning from '../../../public/images/ac-vent-cleaning.png';
import acSantization from '../../../public/images/ac-santization.png';
import Stripe from '@/components/stripe/stripe-component';

const ServicesPage = () => {
    return (
        <>
            <section className='services-hero-section'>
                <div className="services-section-content container">
                    <h1><span>Trusted</span> & <span>Reliable</span><br />car washing</h1>
                    <div className="section-description font-weight-600">we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. </div>
                    <div className='services-hero-btn-wrapper'>
                        <WypeButton buttonText={'BOOK NOW'} click={() => { }} />
                    </div>
                </div>
                <Image src={servicesHeroImg} loading='eager' alt='wype services hero' fill={true} />
            </section>
            <section className="why-choose-section">
                <div className="why-choose-section-wrapper container">
                    <div className="why-choose-wype-flex">
                        <div className="why-choose-img-wrapper">
                            <Image src={whyChooseWypeImg} alt='wype cleaning' fill={true} />
                        </div>
                        <div className="why-choose-wype-content">
                            <h2><span>Why Choose</span> Wype</h2>
                            <div className='why-choose-wype-description'>
                                <p>Welcome to Wype Washing Services, where cleanliness meets convenience!</p>
                                <p>At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. That&apos;s why we&apos;ve made it our mission to revolutionize the way you keep your vehicle sparkling clean.</p>
                                <p>Founded on the principles of efficiency, quality, and customer satisfaction, Wype Washing Services brings professional car washing right to your doorstep. Whether you're a busy professional, a parent juggling multiple responsibilities, or simply someone who values their time, we&apos;re here to make car maintenance hassle-free.</p>
                                <p>Our team comprises dedicated professionals who are passionate about delivering exceptional service. We use eco-friendly products and the latest techniques to ensure a thorough yet gentle clean for your vehicle, inside and out. From sedans to SUVs, we cater to all makes and models, treating each car with the care and attention it deserves.</p>
                            </div>
                        </div>
                    </div>
                    <div className="why-choose-feature-flex">

                        <div className="why-choose-feature-item">
                            <div className="seat-icon-wrapper">
                                <Image src={redSeatIcon} alt='red seat' />
                            </div>
                            <div className="item-title font-weight-700">Professional Machines</div>
                            <div className="item-description">Welcome to Wype Washing Services, where cleanliness meets convenience!</div>
                        </div>

                        <div className="why-choose-feature-item">
                            <div className="seat-icon-wrapper">
                                <Image src={redSeatIcon} alt='red seat' />
                            </div>
                            <div className="item-title font-weight-700">Eco-friendly save water concept</div>
                            <div className="item-description">Welcome to Wype Washing Services, where cleanliness meets convenience!</div>
                        </div>

                        <div className="why-choose-feature-item">
                            <div className="seat-icon-wrapper">
                                <Image src={redSeatIcon} alt='red seat' />
                            </div>
                            <div className="item-title font-weight-700">Trusted and reliable</div>
                            <div className="item-description">Welcome to Wype Washing Services, where cleanliness meets convenience!</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services-list-section'>
                <div className='service-section-wrapper container'>

                    <div className="services-section-content-wrapper">
                        <h3 className="section-title">Wype <span>Services</span></h3>
                    </div>

                    <div className="services-list-flex">

                        <div className="service-item-card">
                            <Image src={steamCarWash} alt='wype steam car wash' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={interiorDryCleaning} alt='wype interior dry cleaning' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={glassTreatment} alt='wype glass treatment' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={alloyCoating} alt='wype alloy coating' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={engineCoating} alt='wype engine coating' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={hardWaterSpotRemoval} alt='wype hardwater spot removal' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={tarGlueRemoval} alt='wype tar glue removal' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={headLightRestoration} alt='wype headlight restoration' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={waxing} alt='wype waxing' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={fabricCoating} alt='wype fabric coating' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={leatherConditioning} alt='wype leather conditioning' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={acVentCleaning} alt='wype ac vent foam cleaining' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={acSantization} alt='wype ac santization' fill={true}></Image>
                        </div>

                    </div>
                </div>
            </section>
            <Stripe />
        </>
    )
}

export default ServicesPage;