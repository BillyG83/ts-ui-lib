import React, { useState } from 'react'

interface Props {
    switchColor?: string,
    switchID: string,
    switchLabel?: string,
    switchOnByDefault?: boolean,
}

const Switch: React.FC<Props> = ({
    switchColor,
    switchID,
    switchLabel = 'Switch me',
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
            {
                switchLabel
                ? <label htmlFor={switchID}>{ switchLabel }</label>
                : ''
            }
            <input 
                checked={IsSwitchOn} 
                id={switchID} 
                type="checkbox"
                onChange={handleChange}
            />

            <div className="switch-ui" aria-hidden="true">
                <span 
                    aria-hidden="true"
                    className="switch__toggle" 
                    style={{
                        backgroundColor: switchColor,
                    }}
                />
            </div>
        </div>
    )
}

export default Switch