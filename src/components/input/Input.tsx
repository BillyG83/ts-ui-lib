import React from 'react'
import './Input.css'

interface InputProps {
    inputId: string,
    inputLabel?: string,
    inputName: string,
    inputPlaceholder?: string,
    inputType?: 'text' | 'password' | 'number' | 'radio' | 'checkbox',
    inputValue?: string | number,
    valueChanged?: (
        type: string,
        id: string, 
        value: string, 
        checked: boolean
    ) => void
}

const Input = ({
    inputId,
    inputLabel,
    inputName,
    inputPlaceholder,
    inputType = 'text',
    inputValue,
    valueChanged,
}: InputProps) => {

    const isCheckbox: boolean = Boolean(
        inputType === 'checkbox'
        || inputType === 'radio'
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
        valueChanged && valueChanged(
            inputType,
            event?.currentTarget?.name,
            event?.currentTarget?.value,
            event?.currentTarget?.checked,
        )
    }

    const renderInput = () => (
        <input
            id={inputId}
            name={inputName}
            onChange={handleChange}
            placeholder={inputPlaceholder}
            type={inputType} 
            value={inputValue}
        />
    )

    const renderCheckbox = () => (
        <input
            id={inputId}
            name={inputName}
            onChange={handleChange}
            type={inputType}
            value={inputValue}
        />
    )

    return (
        <div className="input">
            {
                inputLabel
                ? <label htmlFor={inputId}>{inputLabel}</label>
                : ''
            }

            {
                !isCheckbox 
                ? renderInput()
                : renderCheckbox()
            }
        </div>
    )
}

export default Input