'use client'

import './button-component.scss';

export interface ButtonOptions {
    buttonText: string,
    click: () => void,
    color?: string,
    backgroundColor?: string,
    fontSize?: string,
    borderColor?: string,
    fontWeight?: string,
    borderRadius?: string,
}

const WypeButton = (props: ButtonOptions) =>{
    
    return(
        <button onClick={() => props.click()} style={{color : props.color, backgroundColor: props.backgroundColor, fontSize: props.fontSize, border: '2px solid '+ props.borderColor, fontWeight: props.fontWeight, borderRadius: props.borderRadius}}>{props.buttonText}</button>
    )
}

export default WypeButton;