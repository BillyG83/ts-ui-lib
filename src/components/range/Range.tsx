import React, { useState, useEffect } from 'react'
import { InputValues } from '../interface'
import './Range.css'

interface Props {
    rangeId: string,
    rangeLabel: string,
    rangeMax: number,
    rangeMin: number,
    rangeUpdated: (data: InputValues) => void,
    rangeValue: number,
}

const Range: React.FC<Props> = ({
    rangeId,
    rangeLabel,
    rangeMax,
    rangeMin,
    rangeUpdated,
    rangeValue,
}) => {
    const [currentValue, setCurrentValue] = useState(rangeValue)

    const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRangeValue = Number(event.currentTarget.value)
        setCurrentValue(newRangeValue)
    }
    
    useEffect(() => {
        rangeUpdated({
            checked: false,
            id: rangeId,
            type: 'range',
            value: currentValue,
        })
    }, [currentValue])
    
    return (
        <div className="range">
            <label htmlFor={rangeId}>{rangeLabel}</label>
            <p>{currentValue} of {rangeMax}</p>
            <input 
                data-testid={rangeId}
                id={rangeId}
                max={rangeMax} 
                min={rangeMin} 
                onChange={rangeChange}
                type="range" 
                value={currentValue} 
            />
        </div>
    )
}

export default Range