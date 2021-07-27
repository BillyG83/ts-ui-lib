import React, { useState } from 'react'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { UserInterface } from '../interface'

const initialData: UserInterface = {
    name: '',
    age: 0,
    country: '',
    address: {
        street: '',
        number: 0,
        zip: '',
    },
    admin: false,
}

export const Form = () => {
    const [ user, setUser ] = useState<UserInterface>(initialData)

    const handleClick = (data: string) => {
        console.log('button ID: ' + data);
    }

    const inputValueChanged = (inputName: string, inputValue: string) => {
        setUser((prevState) => ({
            ...prevState,
            [inputName] : inputValue
        }))
    }

    return (
        <div>
            <Input 
                inputId="name-input"
                inputName="name"
                inputPlaceholder="name"
                valueChanged={inputValueChanged}
                inputType="text"
            />
            <Input 
                inputId="age-input"
                inputName="age"
                inputPlaceholder="age"
                valueChanged={inputValueChanged}
                inputType="number"
            />

            <Button buttonType="submit" buttonId="data-button" text="get data" clickHandle={handleClick} />
        </div>
    ) 
} 