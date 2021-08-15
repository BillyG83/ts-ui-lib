import React, { useState, useEffect } from 'react'
import { InputValues } from '../interface'
import { color } from '../../utils/colors'
import './Switch.css'

interface Props {
    switchBackgroundColor?: string,
    switchColorOff?: string,
    switchColorOn?: string,
    switchID: string,
    switchLabel?: string,
    switchName: string,
    switchOffText?: string,
    switchOnByDefault?: boolean,
    switchOnText?: string,
    switchSize?: 'small' | 'normal' | 'large',
    switchTextColor?: string,
    valueChanged: (data: InputValues) => void,
}

const Switch: React.FC<Props> = ({
    switchBackgroundColor = String(color.greyLight),
    switchColorOff = String(color.grey),
    switchColorOn = String(color.green),
    switchID,
    switchLabel,
    switchName,
    switchOnByDefault = false,
    switchSize = 'normal',
    switchOnText,
    switchOffText,
    switchTextColor = String(color.greyLight),
    valueChanged,
}) => {
    const [IsSwitchOn, UseIsSwitchOn] = useState(switchOnByDefault)
    const [SwitchText, SetSwitchText] = useState(switchOnByDefault ? switchOnText : switchOffText)

    useEffect(() => {
        let root = document.documentElement;
        root.style.setProperty('--switchColorOff', `${switchColorOff}`);
        root.style.setProperty('--switchColorOn', `${switchColorOn}`);
    }, [switchColorOn, switchColorOff])

    useEffect(() => {
        SetSwitchText(IsSwitchOn ? switchOnText : switchOffText)
    }, [IsSwitchOn, switchOnText, switchOffText])

    const bubbleUp = (data: InputValues) => {
        valueChanged(data)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
        UseIsSwitchOn(!IsSwitchOn)
        bubbleUp({
            checked: event?.currentTarget?.checked,
            id: event?.currentTarget?.id,
            type: 'checkbox',
            value: event?.currentTarget?.value,
        })
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
                    name={switchName}
                    onChange={handleChange}
                    type="checkbox"
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
                        style={{
                            color: switchTextColor,
                        }}
                    >
                        { SwitchText }
                    </span>
                </div>
            </label>
        </div>
    )
}

export default Switch