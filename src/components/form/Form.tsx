import React, { useState } from 'react'
import Button from '../button/Button'
import RadioGroup from '../radioGroup/RadioGroup'
import Input from '../input/Input'
import Switch from '../switch/Switch'
import Range from '../range/Range'
import Stepper from '../stepper/Stepper'

import { UserInterface, InputValues } from '../interface'

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

const Form: React.FC = () => {
    const [ user, setUser ] = useState<UserInterface>(initialData)

    const handleClick = (data: string) => {
        console.log('button ID: ' + data);
        console.log(user);
    }

    const inputValueChanged = (data: InputValues) => {
        const { checked, id, type, value } = data
        const dataToUpdate = type === 'checkbox'
            ? checked
            : value
        
        setUser((prevState) => ({
            ...prevState,
            [id] : dataToUpdate
        }))
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            
            <div className="spacer">
                <Stepper title="hot stepper!"/>
            </div>
            
            <div className="spacer">
                <Range
                    rangeId="rangers"
                    rangeMax={10}
                    rangeMin={0}
                    rangeValue={5}
                    rangeLabel="Score something with a range slider"
                ></Range>
            </div>

            <div className="spacer">
                <Input 
                    inputId="name-input"
                    inputLabel="enter your full name"
                    inputName="name"
                    inputPlaceholder="name"
                    inputType="text"
                    valueChanged={inputValueChanged}
                />
            </div>
            
            <div className="spacer">
                <Switch
                    switchLabel="do you like chips?"
                    switchID="chip-fan"
                    valueChanged={inputValueChanged}
                    switchName="chips"
                    switchOnText="on"
                    switchOffText="off"
                ></Switch>
            </div>

            <div className="spacer">
                <Switch
                    switchLabel="do you like dips?"
                    switchID="dip-fan"
                    valueChanged={inputValueChanged}
                    switchName="dips"
                    switchOnText="on"
                    switchOffText="off"
                ></Switch>
            </div>

            <div className="spacer">
                <Input 
                    inputId="password-input"
                    inputLabel="add a password"
                    inputName="password"
                    inputPlaceholder="password"
                    inputType="password"
                    valueChanged={inputValueChanged}
                />
            </div>

            <div className="spacer">
                <Input 
                    inputId="age-input"
                    inputLabel="enter your age"
                    inputName="age"
                    inputPlaceholder="age"
                    inputType="number"
                    valueChanged={inputValueChanged}
                />
            </div>

            <div className="spacer">
                <Input 
                    inputId="checkbox-input"
                    inputLabel="tick to get admin"
                    inputName="admin"
                    inputType="checkbox"
                    valueChanged={inputValueChanged}
                />
            </div>

            <div className="spacer">
                <RadioGroup radioGroupId="sex" radioItems={['male', 'female']} />
            </div>

            <div className="spacer">
                <Button buttonType="submit" buttonId="data-button" text="get data" clickHandle={handleClick} />
            </div>
        </form>
    ) 
}

export default Form