import React from 'react'
import { InputValues } from '../interface'
import './Input.css'

type AllowedInputTypes = 'text' | 'password' | 'number' | 'radio' | 'checkbox'

interface Props {
    inputId: string,
    inputLabel?: string,
    inputName: string,
    inputPlaceholder?: string,
    inputType?: AllowedInputTypes,
    inputValue?: string | number,
    valueChanged: (data: InputValues) => void,
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

    const bubbleUp = (data: InputValues) => {
        valueChanged(data)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
        bubbleUp({
            checked: event?.currentTarget?.checked,
            id: event?.currentTarget?.id,
            type: inputType,
            value: event?.currentTarget?.value,
        })
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