import React, { useState, useEffect } from 'react'
import { color } from '../../utils/colors'
import './Switch.css'

interface Props {
    switchBackgroundColor?: string,
    switchColorOff?: string,
    switchColorOn?: string,
    switchID: string,
    switchLabel?: string,
    switchOnByDefault?: boolean,
    switchSize?: 'small' | 'normal' | 'large',
}

const Switch: React.FC<Props> = ({
    switchBackgroundColor = String(color.greyLight),
    switchColorOff = String(color.grey),
    switchColorOn = String(color.green),
    switchID,
    switchLabel,
    switchOnByDefault = false,
    switchSize = 'normal',
}) => {
    const [IsSwitchOn, UseSwitchOn] = useState(switchOnByDefault)

    useEffect( () => {
        let root = document.documentElement;
        root.style.setProperty('--switchColorOff', `${switchColorOff}`);
        root.style.setProperty('--switchColorOn', `${switchColorOn}`);
    }, [switchColorOn, switchColorOff])

    const handleChange = () => {
        UseSwitchOn(!IsSwitchOn)
    }

    return (
        <div className={
            `switch switch--${switchSize} ${IsSwitchOn 
            ? 'switch--on'
            : 'switch--off'
        }`
        }>
            <label htmlFor={switchID}>
                {
                    switchLabel
                    ? <span className="switch__text">{switchLabel}</span>
                    : ''
                }
                
                <input 
                    checked={IsSwitchOn} 
                    id={switchID} 
                    type="checkbox"
                    onChange={handleChange}
                />

                <div 
                    className="switch__ui" 
                    aria-hidden="true"
                    style={{
                        backgroundColor: switchBackgroundColor,
                    }}
                >
                    <span 
                        aria-hidden="true"
                        className="switch__toggle" 
                    />
                </div>
            </label>
        </div>
    )
}

export default Switch