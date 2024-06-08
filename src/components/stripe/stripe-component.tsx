import WypeButton from '../button/button-component';
import './stripe-component.scss';

const Stripe = () => {
    return (
        <div className="stripe-wrapper">
            <div className='stripe container'>
                <div className="stripe-text font-weight-700">Hurry to book <span>Unique car wash <br /> booking system</span></div>
                <div className='stripe-btn-wrapper'>
                    <WypeButton buttonText='BOOK NOW' click={() => { }} backgroundColor='var(--blackColor)'></WypeButton>
                </div>
            </div>
        </div>
    )

}

export default Stripe;