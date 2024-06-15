'use client'

import WypeButton from '../button/button-component';
import './stripe-component.scss';

export interface StripeProps {
    buttonRadius?: string
}

const Stripe = (props: StripeProps) => {
 
    return (
        <div className="stripe-wrapper">
            <div className='stripe container'>
                <div className="stripe-text font-weight-700">Hurry to book <span>Unique car wash <br /> booking system</span></div>
                <div className='stripe-btn-wrapper'>
                    <WypeButton buttonText='BOOK NOW' click={() => { }} backgroundColor='var(--blackColor)' borderRadius={props.buttonRadius}></WypeButton>
                </div>
            </div>
        </div>
    )

}

export default Stripe;