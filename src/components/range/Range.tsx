import React, { useState } from 'react'
import './Range.css'

interface Props {
    rangeId: string,
    rangeMin: number,
    rangeMax: number,
    rangeValue: number,
    rangeLabel: string,
}

const Range: React.FC<Props> = ({
    rangeId,
    rangeMin,
    rangeMax,
    rangeValue,
    rangeLabel,
}) => {
    const [currentValue, setCurrentValue] = useState(rangeValue)

    const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRangeValue = Number(event.currentTarget.value)
        setCurrentValue(newRangeValue)
    }
    return (
        <div className="range">
            <label htmlFor={rangeId}>{rangeLabel}</label>
            <p>{currentValue} of {rangeMax}</p>
            <input 
                id={rangeId}
                type="range" 
                min={rangeMin} 
                max={rangeMax} 
                value={currentValue} 
                onChange={rangeChange}
            />
        </div>
    )
}

export default Range