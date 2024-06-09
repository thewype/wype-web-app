'use client'

import './switch.scss';

export interface SwitchOptions {
    switchId: string,
    switchToggle: () => void,
    switchState: boolean
}

const ToggleSwitch = (props: SwitchOptions) => {

    return (
        <label htmlFor={props.switchId} className="switch-wrapper">
            <input className="switch-checkbox" type="checkbox" checked={props.switchState} id={props.switchId} onChange={() => props.switchToggle()} />
            <span className="switch-track"></span>
        </label>
    )
}

export default ToggleSwitch;


//[for]="props().switchId" [ngStyle]="{'cursor': props().switchDisabled ?  'not-allowed': 'pointer'}"

//[checked]="props().switchChecked" (change)="onSwitchChange($event)" [id]="props().switchId"