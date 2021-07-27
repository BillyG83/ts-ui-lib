import React from 'react'

interface InputProps {
    inputId: string,
    inputLabel?: string,
    inputName: string,
    inputPlaceholder?: string,
    inputType?: 'text' | 'password' | 'number' | 'radio' | 'checkbox',
    inputValue?: string | number,
    valueChanged?: (id: string, value: string) => void
}

export const Input = ({
    inputId,
    inputLabel,
    inputName,
    inputPlaceholder,
    inputType = 'text',
    inputValue,
    valueChanged,
}: InputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        valueChanged && valueChanged(event?.currentTarget?.name, event?.currentTarget?.value)
    }

    return(
        <>
            <label htmlFor={inputId}>
                {inputLabel}
            </label>
            <input
                id={inputId}
                name={inputName}
                onChange={handleChange}
                placeholder={inputPlaceholder}
                type={inputType} 
                value={inputValue}
            />
        </>
    )
}