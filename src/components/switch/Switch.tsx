import React, { useState } from 'react'
import './Switch.css'

interface Props {
    switchBackgroundColor?: string,
    switchColor?: string,
    switchID: string,
    switchLabel?: string,
    switchOnByDefault?: boolean,
}

const Switch: React.FC<Props> = ({
    switchBackgroundColor,
    switchColor,
    switchID,
    switchLabel,
    switchOnByDefault = false,
}) => {
    const [IsSwitchOn, UseSwitchOn] = useState(switchOnByDefault)

    const handleChange = () => {
        UseSwitchOn(!IsSwitchOn)
    }

    return (
        <div className={
            `switch ${IsSwitchOn 
            ? 'switch--on'
            : 'switch--off'}`
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
                        style={{
                            backgroundColor: switchColor,
                        }}
                    />
                </div>
            </label>
        </div>
    )
}

export default Switch