import React from 'react'
import './Input.css'

interface Props {
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

const Input: React.FC<Props> = ({
    inputId,
    inputLabel,
    inputName,
    inputPlaceholder,
    inputType = 'text',
    inputValue,
    valueChanged,
}: Props) => {

    const isCheckboxOrRadio: boolean = Boolean(
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

    const renderInput = (): JSX.Element => (
        <input
            autoComplete="true"
            id={inputId}
            name={inputName}
            onChange={handleChange}
            placeholder={inputPlaceholder}
            type={inputType} 
            value={inputValue}
        />
    )

    const renderCheckbox = (): JSX.Element => (
        <input
            id={inputId}
            name={inputName}
            onChange={handleChange}
            type={inputType}
            value={inputValue}
        />
    )

    return (
        <div data-testid="input" className="input">
            {
                inputLabel
                ? <label htmlFor={inputId}>{inputLabel}</label>
                : ''
            }

            {
                !isCheckboxOrRadio 
                ? renderInput()
                : renderCheckbox()
            }
        </div>
    )
}

export default Input