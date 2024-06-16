'use client'

import Stripe from '@/components/stripe/stripe-component';
import steamWashSectionImage from '../../../public/images/steam-wash-section.png';
import Image from 'next/image';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import whyChooseWypeImg from '../../../public/images/why-choose-wype.png';
import WypeButton from '@/components/button/button-component';
import ToggleSwitch from '@/components/switch/switch';
import { useState } from 'react';
import './packages.scss';

const PackagePage = () => {

    const [switchState, setSwitchState] = useState<boolean>(false);

    return (
        <>
            <section className="packages-section">
                <div className="section-packages-wrapper container">
                    <div className="package-content">
                        <div className="section-title font-weight-700"><span>Pricing</span> plans</div>
                        <div className="section-sub-title font-weight-600">We understand the hustle and bustle of modern life can often leave little </div>
                        <div className="section-description font-weight-600"><span className='alternative-day' style={{color: switchState ? 'var(--blackColor)' : 'var(--redColor)'}}>Every Alternative Day</span> <ToggleSwitch switchId='plans-switch' switchState={switchState} switchToggle={() => setSwitchState(!switchState)} /> <span className='weekly' style={{color: !switchState ? 'var(--blackColor)' : 'var(--redColor)'}}>Weekly 6 Days</span></div>
                    </div>
                    <div className="packages-flex">

                        <div className="package package-1">
                            <div className="package-title font-weight-600">Silver Package</div>
                            <div className="package-cost font-weight-800">₹ 1699/-</div>

                            <div className="package-items-list">

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Basic cleaning with no-rinse</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Solution</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">All Glass Cleaning</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Tyre & Alloy Cleaning</div>
                                </div>
                            </div>

                            <div className='package-btn-wrapper'>
                                <WypeButton buttonText='Get this plan' backgroundColor='transparent' borderColor='var(--blackColor)' color='var(--blackColor)' fontWeight='600' fontSize='15px' borderRadius='30px' click={() =>{}} />
                            </div>

                        </div>


                        <div className="package package-2">
                            <div className="package-title font-weight-600">Gold Package</div>
                            <div className="package-cost font-weight-800">₹ 1999/-</div>

                            <div className="package-items-list">

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Silver Package (Included)</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Steam wash in a month</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Interior Vaccuming</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Engine bay steam cleaning</div>
                                </div>
                            </div>

                            <div className='package-btn-wrapper'>
                                <WypeButton buttonText='Get this plan' backgroundColor='transparent' borderColor='var(--blackColor)' color='var(--blackColor)' fontWeight='600' fontSize='15px' borderRadius='30px' click={() =>{}} />
                            </div>

                        </div>

                        <div className="package package-3">
                            <div className="package-title font-weight-600">Silver Package (Included)</div>
                            <div className="package-cost font-weight-800">₹ 3499/-</div>

                            <div className="package-items-list">

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Gold Package (Included)</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Interior Deep Dry Cleaning</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Wype&apos;s Goodies (TissueBox + Air fresher)</div>
                                </div>

                                <div className="list-item-flex">
                                    <CheckCircle className='check-circle' weight="fill" />
                                    <div className="item-text font-weight-700">Tyre & Alloy Cleaning</div>
                                </div>
                            </div>

                            <div className='package-btn-wrapper'>
                                <WypeButton buttonText='Get this plan' backgroundColor='transparent' borderColor='var(--blackColor)' color='var(--blackColor)' fontWeight='600' fontSize='15px' borderRadius='30px' click={() =>{}} />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className='steamwash-package-section'>
                <div className="steamwash-content-wrapper container">
                    <div className="section-image-wrapper">
                        <Image src={steamWashSectionImage} alt='wype steamwash' fill={true} />
                    </div>
                    <div className="section-content">
                        <div className="section-title font-weight-700"><span>Onetime Steam</span> Wash</div>

                        <div className="section-mobile-image-wrapper">
                            <Image className='steamwash-img' src={whyChooseWypeImg} alt='wype steam wash' fill={true} />
                        </div>

                        <div className="section-item-list">
                            <div className="cost font-weight-800">₹ 900/-</div>

                            <div className="list-item-flex">
                                <CheckCircle className='circle-check' weight="fill" />
                                <div className="item-text font-weight-700">Hatchback</div>
                            </div>

                            <div className="list-item-flex">
                                <CheckCircle className='circle-check' weight="fill" />
                                <div className="item-text font-weight-700">Sedan</div>
                            </div>

                            <div className="list-item-flex">
                                <CheckCircle className='circle-check' weight="fill" />
                                <div className="item-text font-weight-700">SUV/MUV&apos;s</div>
                            </div>

                            <div className="list-item-flex">
                                <CheckCircle className='circle-check' weight="fill" />
                                <div className="item-text font-weight-700">Pickup Trucks</div>
                            </div>
                        </div>
                        <div className="section-btn-wrapper">
                            <WypeButton buttonText='Get this plan' backgroundColor='var(--whiteColor)' color='var(--blackColor)' borderColor='var(--blackColor)' fontWeight='600' fontSize='15px' borderRadius='30px' click={() => { }} />
                        </div>
                    </div>
                </div>
            </section>
            <Stripe />
        </>
    )
}

export default PackagePage;