import React, { useState } from 'react'
import './Range.css'

interface Props {
    rangeId: string,
    rangeMin: number,
    rangeMax: number,
    rangeValue: number,
}

const Range: React.FC<Props> = ({
    rangeId,
    rangeMin,
    rangeMax,
    rangeValue,
}) => {
    const [currentValue, setCurrentValue] = useState(rangeValue)
    const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRangeValue = Number(event.currentTarget.value)
        setCurrentValue(newRangeValue)
    }
    return (
        <div className="range">
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