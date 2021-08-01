import React, { useState } from 'react'
import Button from '../button/Button'
import RadioGroup from '../radioGroup/RadioGroup'
import Input from '../input/Input'
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
    sex: ''
}

const Form = () => {
    const [ user, setUser ] = useState<UserInterface>(initialData)

    const handleClick = (data: string) => {
        console.log('button ID: ' + data);
        console.log(user);
    }

    const inputValueChanged = (
        inputType: string,
        inputName: string, 
        inputValue: string, 
        boxChecked: boolean,
    ) => {
        const dataToUpdate = inputType === 'checkbox'
            ? boxChecked
            : inputValue        
        
        setUser((prevState) => ({
            ...prevState,
            [inputName] : dataToUpdate
        }))
    }

    return (
        <div>
            <Input 
                inputId="name-input"
                inputLabel="enter your full name"
                inputName="name"
                inputPlaceholder="name"
                inputType="text"
                valueChanged={inputValueChanged}
            />
            <Input 
                inputId="age-input"
                inputLabel="enter your age"
                inputName="age"
                inputPlaceholder="age"
                inputType="number"
                valueChanged={inputValueChanged}
            />

            <Input 
                inputId="checkbox-input"
                inputLabel="tick to get admin"
                inputName="admin"
                inputType="checkbox"
                valueChanged={inputValueChanged}
            />

            <RadioGroup id="sex">
                <Input 
                    inputId="radio-male"
                    inputLabel="Male"
                    inputName="sex"
                    inputValue="male"
                    inputType="radio"
                    valueChanged={inputValueChanged}
                />
                <Input 
                    inputId="radio-female"
                    inputLabel="Female"
                    inputName="sex"
                    inputValue="female"
                    inputType="radio"
                    valueChanged={inputValueChanged}
                />
            </RadioGroup>

            <Button buttonType="submit" buttonId="data-button" text="get data" clickHandle={handleClick} />
        </div>
    ) 
}

export default Form