'use client'

import './home.scss';
import Image from 'next/image';
import hero1 from '../../../public/images/hero-1.png';
import hero2 from '../../../public/images/hero-2.png';
import whoIsWypeImage from '../../../public/images/who-is-wype.png';
import wypeOurProcess from '../../../public/images/our-process.png';
import calenderIcon from '../../../public/images/calender.svg';
import checklistIcon from '../../../public/images/check-list.svg';
import handOverIcon from '../../../public/images/handover.svg';
import documentSearchIcon from '../../../public/images/document-search.svg';
import interiorCleaningImg from '../../../public/images/interior-cleaning-dry.png';
import steamCarWash from '../../../public/images/steam-car-wash.png';
import glassTreatmentImg from '../../../public/images/glass-treatment.png';
import preserveSectionImg from '../../../public/images/preserve-section-img.png';
import handCleanIcon from '../../../public/images/hand-clean.svg';
import detailingMafiaIMage from '../../../public/images/detailing-mafia-logo.png';
import arcImage from '../../../public/images/arc-logo.png';
import mafraImage from '../../../public/images/ma-fra-logo.png';
import manaMachineImage from '../../../public/images/mana-machine-log.png';
import mobileHero1 from '../../../public/images/mobile-hero.png';
import ourProcessMobileHero from '../../../public/images/our-process-hero.png';
import carDryCleanImage from '../../../public/images/dry-clean-car.png';
import userAvatar from '../../../public/images/user.png';
import handCleanWhite from '../../../public/images/hand-clean-white.svg';
import whiteFeather from '../../../public/images/feather-white.svg';
import whiteSeat from '../../../public/images/seat-white.svg';
import indisCommunityImage from '../../../public/images/inids-community.png';
import nccUrbanCommunityImage from '../../../public/images/ncc-urban-community.png';
import bmwLogo from '../../../public/images/bwm-log.png';
import { useRef, useState } from 'react';
import { CaretCircleLeft, CaretCircleRight, CaretRight, CaretLeft } from '@phosphor-icons/react/dist/ssr';
import WypeButton from '@/components/button/button-component';
import Stripe from '@/components/stripe/stripe-component';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const HomePage = () => {
    const imageContainerRef = useRef<any>();
    const [layerPosition, setLayerPosition] = useState<number>();

    const heroCarouselOptions = {
        responsive: {
            desktopLarge: {
                breakpoint: { max: 3000, min: 701 },
                items: 1
            }
        },
        ssr: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 2000,
        arrows: true,
        transitionDuration: 500,
    };

    const familyCarouselOptions = {
        responsive: {
            desktopLarge: {
                breakpoint: { max: 3000, min: 701 },
                items: 5
            },
            mobile: {
                breakpoint: { max: 700, min: 0 },
                items: 2
            }
        },
        ssr: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 1500,
        arrows: false,
        transitionDuration: 500,
        centerMode: true,
    };


    const testimonialCarouselOptions = {
        responsive: {
            desktopLarge: {
                breakpoint: { max: 3000, min: 1000 },
                items: 3
            },
            desktopMedium: {
                breakpoint: { max: 1000, min: 701 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 700, min: 0 },
                items: 1
            }
        },
        ssr: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 1500,
        arrows: true,
        transitionDuration: 500,
    };

    const hanedlePointerMove = (e: any) => {
        const container = imageContainerRef.current;
        if (container) {
            setLayerPosition(container.getBoundingClientRect().left - e.pageX);
        }
    }

    return (
        <>
            <section className="home-hero-section">
                <Carousel {...heroCarouselOptions} className='hero-carousel '>
                    <div className="hero-slide">
                        <div className="hero-content-wrapper container">
                            <div className="hero-slider-txt font-weight-400">WELCOME TO WYPE REVOLUTION</div>
                            <h1 className='font-weight-800'>give your vehicle the <span>royal</span> <br /> <span>treatment</span> it deserves with wype!</h1>
                            <WypeButton buttonText='BOOK NOW' fontWeight='600' click={() => { }}></WypeButton>
                        </div>
                        <Image className='hero-img' loading='eager' src={hero1} fill={true} alt={'wype hero img'}></Image>
                    </div>
                    <div className="hero-slide">
                        <Image src={hero2} loading='eager' fill={true} alt={'wype hero img2'}></Image>
                    </div>
                </Carousel>
                <div className="mobile-hero-section-wrapper">
                    <Image className='mobile-hero-img' src={mobileHero1} alt='the wype hero' />
                    <div className="mobile-hero-content">
                        <div className="hero-mobile-text font-weight-400">WELCOME TO WYPE REVOLUTION</div>
                        <h1 className='font-weight-800'>give your vehicle the <br /> <span>royal treatment</span> <br /> it deserves with wype!</h1>
                        <div className="hero-btn-wrapper">
                            <WypeButton buttonText='BOOK NOW' fontWeight='600' click={() => { }}></WypeButton>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wype-section'>
                <div className="who-is-wype-container container">

                    <h2 className='section-heading'>WHO IS <span>WYPE?</span></h2>
                    <div className='section-sub-heading font-weight-700'>Car wash & detailing services</div>

                    <div className='home-wype-content-wrapper'>
                        <div className="home-wype-content">
                            <div className="wype-description">
                                <p>Welcome to Wype Washing Services, where cleanliness meets convenience!</p>
                                <p>At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. That&apos;s why we&apos;ve made it our mission to revolutionize the way you keep your vehicle sparkling clean.</p>
                                <p>Founded on the principles of efficiency, quality, and customer satisfaction, Wype Washing Services brings professional car washing right to your doorstep. Whether you&apos;re a busy professional, a parent juggling multiple responsibilities, or simply someone who values their time, we&apos;re here to make car maintenance hassle-free.</p>
                                <p>Our team comprises dedicated professionals who are passionate about delivering exceptional service. We use eco-friendly products and the latest techniques to ensure a thorough yet gentle clean for your vehicle, inside and out. From sedans to SUVs, we cater to all makes and models, treating each car with the care and attention it deserves.</p>
                                <p>What sets us apart is our commitment to convenience. With just a few taps on your phone, you can schedule a wash at a time and location that suits you best. No more waiting in line at the car wash or rearranging your busy schedule - we come to you, rain or shine.</p>
                            </div>
                        </div>
                        <div className="home-wype-img">
                            <Image src={whoIsWypeImage} fill={true} alt='who is wype'></Image>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-process-section">
                <div className="our-process-content-wrapper container">
                    <div>
                        <div className="section-heading font-weight-700">OUR <span>PROCESS</span></div>
                        <div className="section-sub-heading font-weight-500">We know your time is valuable</div>
                    </div>

                    <div className="process-flex">

                        <div className="process-item-wrapper font-weight-600">
                            <div className="process-item">
                                <div className='process-image-wrapper'>
                                    <Image src={calenderIcon} alt='calender' fill={true}></Image>
                                </div>
                            </div>
                            BOOKING
                        </div>
                        <CaretRight className='process-arrow' />

                        <div className="process-item-wrapper font-weight-600">
                            <div className="process-item">
                                <div className='process-image-wrapper'>
                                    <Image src={documentSearchIcon} alt='calender' fill={true}></Image>

                                </div>
                            </div>
                            INSPECTION
                        </div>

                        <CaretRight className='process-arrow' />

                        <div className="process-item-wrapper font-weight-600">
                            <div className="process-item">
                                <div className='process-image-wrapper'>
                                    <Image src={checklistIcon} alt='calender' fill={true}></Image>

                                </div>
                            </div>
                            CHECKLIST
                        </div>

                        <CaretRight className='process-arrow' />

                        <div className="process-item-wrapper font-weight-600">
                            <div className="process-item">
                                <div className='process-image-wrapper'>
                                    <Image src={handOverIcon} alt='calender' fill={true}></Image>

                                </div>
                            </div>
                            COMPLETION
                        </div>
                    </div>
                </div>
                <Image className='our-process-bg' src={wypeOurProcess} fill={true} alt={'wype process'}></Image>
                <Image className='our-process-bg-mobile' src={ourProcessMobileHero} alt={'wype process'}></Image>

            </section>
            <section className="dryclean-section">
                <div className="dryclean-section-wrapper container">
                    <div className="dryclean-cta-wrapper">
                        <div className="dryclean-cta-content">
                            <div className="cta-title font-weight-700">Dry <span>Cleaning</span> any <br />dirt inside the car</div>
                            <div className='dryclean-cta'>
                                <WypeButton buttonText='BOOK NOW' fontWeight='600' click={() => { }}></WypeButton>
                            </div>

                            <div className="arrows-flex">
                                <CaretCircleLeft />
                                <CaretCircleRight />
                            </div>
                        </div>
                        <div className='dryclean-hero'>
                            <div className="hero-text-flex font-weight-600"><div className='title'>BEFORE</div><div className='title'>AFTER</div></div>
                            <div className="dryclean-image-wrapper" ref={imageContainerRef} onPointerMove={hanedlePointerMove}>
                                <div className="image-layer" style={{ 'right': `${layerPosition}px` }}>
                                    <div className="arow-container">
                                        <CaretLeft />
                                        <CaretRight />
                                    </div>
                                </div>
                                <Image src={carDryCleanImage} alt='car cleaning' fill={true}></Image>
                            </div>
                            <div className="arrows-flex-mobile">
                                <CaretCircleLeft />
                                <CaretCircleRight />
                            </div>
                        </div>
                    </div>

                    <div className="dryclean-features-wrapper">

                        <div className="dryclean-item">
                            <Image src={handCleanWhite} alt='clean'></Image>
                            <div>
                                <div className="dryclean-item-heading">Natural Cleaners</div>
                                <div className="dryclean-item-description font-weight-600">Welcome to Wype Washing Services, where cleanliness meets convenience!</div>
                            </div>
                        </div>

                        <div className="dryclean-item">
                            <Image src={whiteSeat} alt='car seat'></Image>
                            <div>
                                <div className="dryclean-item-heading">Natural Cleaners</div>
                                <div className="dryclean-item-description font-weight-600">Welcome to Wype Washing Services, where cleanliness meets convenience!</div>
                            </div>
                        </div>

                        <div className="dryclean-item">
                            <Image src={whiteFeather} alt='feather'></Image>
                            <div>
                                <div className="dryclean-item-heading">Natural Cleaners</div>
                                <div className="dryclean-item-description font-weight-600">Welcome to Wype Washing Services, where cleanliness meets convenience!</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="mobile-stripe">
                <Stripe buttonRadius='30px' />
            </div>
            <section className='services-section'>
                <div className="services-section-wrapper container">
                    <h3 className='section-heading'>WYPE <span>SERVIES</span></h3>
                    <div className="section-description">Welcome to Wype Washing Services, where cleanliness meets convenience! <br />
                        At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. <br />
                        That&apos;s why we&apos;ve made it our mission to revolutionize the way you keep your vehicle sparkling clean.
                    </div>

                    <div className="services-flex">
                        <div className="service-item-card">
                            <Image src={steamCarWash} alt='steam car wash' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={interiorCleaningImg} alt='interior dry cleaning' fill={true}></Image>
                        </div>

                        <div className="service-item-card">
                            <Image src={glassTreatmentImg} alt='car glass treatment' fill={true}></Image>
                        </div>
                    </div>
                    <WypeButton buttonText='Browse More' fontWeight='600' click={() => { }} backgroundColor='transparent' color='var(--redColor)' borderColor='var(--redColor)' fontSize='14px'></WypeButton>
                </div>
            </section>
            <section className='preserving-section'>
                <div className="preserving-section-wrapper container">
                    <div className="preserving-flex">
                        <div className="preserving-item">
                            <div className="preserve-section-title font-weight-700">Preserving the planet: <br /> The crucial role of <span>water <br /> conservation</span> at wype</div>
                            <div className="preserve-section-description">At Wype, we recognize the paramount importance of water conservation, especially in the realm of vehicle cleaning. With traditional car detailing methods consuming gallons upon gallons of water, our commitment to sustainability drives us to revolutionize the industry. By employing innovative techniques and eco-friendly products, we not only deliver exceptional results but also significantly reduce water usage, paving the way for a greener, more sustainable future.</div>

                            <div className="preserve-features-flex">
                                <div className="preserve-feature-item-flex font-weight-600">
                                    <Image src={handCleanIcon} alt='hand-clean' width={40} height={40}></Image>
                                    Environmental Stewardship
                                </div>

                                <div className="preserve-feature-item-flex font-weight-600">
                                    <Image src={handCleanIcon} alt='hand-clean' width={40} height={40}></Image>
                                    Redefining Car Detailing
                                </div>

                                <div className="preserve-feature-item-flex font-weight-600">
                                    <Image src={handCleanIcon} alt='hand-clean' width={40} height={40}></Image>
                                    Addressing Water Scarcity
                                </div>
                            </div>
                        </div>
                        <div className="preserving-item-img">
                            <Image src={preserveSectionImg} alt='wype carwash' fill={true}></Image>
                        </div>
                    </div>
                </div>
            </section>
            <div className="desktop-stripe">
                <Stripe />
            </div>
            <section className='collaborated-family-section'>
                <div className="collaborated-section-wrapper container">
                    <div className='section-content'>
                        <div className="section-heading font-weight-700">Collaborated <span>Family</span></div>
                        <div className="section-description">Welcome to Wype Washing Services, where cleanliness meets convenience! At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. That's why we've made it our mission to revolutionize the way you keep your vehicle sparkling clean.</div>
                    </div>

                    <div className='family-carousel-wrapper'>
                        <Carousel {...familyCarouselOptions}>

                            <div className="community-item">
                                <Image className='community-image' src={indisCommunityImage} alt='indis community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={nccUrbanCommunityImage} alt='ncc urban community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={indisCommunityImage} alt='indis community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={nccUrbanCommunityImage} alt='ncc urban community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={indisCommunityImage} alt='indis community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={nccUrbanCommunityImage} alt='ncc urban community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={indisCommunityImage} alt='indis community'></Image>
                            </div>

                            <div className="community-item">
                                <Image className='community-image' src={nccUrbanCommunityImage} alt='ncc urban community'></Image>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="testimonial-section-wrapper container">
                    <div className="testimonial-content">
                        <div className="section-title">OUR TESTIMONIALS</div>
                        <div className="section-heading font-weight-700">What our <span>Customers</span> are saying</div>
                    </div>
                    <div className="testimonial-carousel-wrapper">
                        <Carousel {...testimonialCarouselOptions}>
                            <div className="testimonial-item">
                                <Image className='car-logo' src={bmwLogo} alt='car-logo' />
                                <div className="testimonial-review">At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. </div>
                                <div className="user-avatar-wrapper">
                                    <Image className='user-logo' src={userAvatar} alt='user' width={80} height={80} />
                                    <div className="user-name font-weight-600">Shivaraj Padala</div>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <Image className='car-logo' src={bmwLogo} alt='car-logo' />
                                <div className="testimonial-review">At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. </div>
                                <div className="user-avatar-wrapper">
                                    <Image className='user-logo' src={userAvatar} alt='user' width={80} height={80} />
                                    <div className="user-name font-weight-600">Shivaraj Padala</div>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <Image className='car-logo' src={bmwLogo} alt='car-logo' />
                                <div className="testimonial-review">At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. </div>
                                <div className="user-avatar-wrapper">
                                    <Image className='user-logo' src={userAvatar} alt='user' width={80} height={80} />
                                    <div className="user-name font-weight-600">Shivaraj Padala</div>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <Image className='car-logo' src={bmwLogo} alt='car-logo' />
                                <div className="testimonial-review">At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing. </div>
                                <div className="user-avatar-wrapper">
                                    <Image className='user-logo' src={userAvatar} alt='user' width={80} height={80} />
                                    <div className="user-name font-weight-600">Shivaraj Padala</div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className='our-partners-section'>
                <div className="our-section-wrapper container">
                    <div className="our-section-content">
                        <div className="section-heading font-weight-700">Our <br /><span>Brand</span> Partners</div>
                        <div className="our-section-description">Welcome to Wype Washing Services, where cleanliness meets convenience!
                            At Wype, we understand the hustle and bustle of modern life can often leave little time for essential chores like car washing.
                            That&apos;s why we&apos;ve made it our mission to revolutionize the way you keep your vehicle sparkling clean.
                        </div>
                        <div>
                            <WypeButton buttonText='Read More' borderColor='var(--redColor)' backgroundColor='var(--whiteColor)' color='var(--redColor)' fontWeight='600' fontSize='14px' click={() => { }}></WypeButton>
                        </div>
                    </div>
                    <div className="our-partners-images-flex"></div>
                </div>
            </section>
        </>
    )
}

export default HomePage;