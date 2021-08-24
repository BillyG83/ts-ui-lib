import React, { useState } from 'react'
import Input from '../input/Input'
import { InputValues } from '../interface'
import './RadioGroup.css'

type Props = {
  radioChanged?: (data: InputValues) => void
  radioGroupId: string,
  radioItems: Array<string>,
}

const RadioGroup: React.FC<Props> = ({
  radioChanged,
  radioGroupId,
  radioItems,
}) =>  {
  const [ selected, setSelected ] = useState('')
  
  const selectionChanged = (data: InputValues) => {
    setSelected(String(data.value))
    radioChanged && radioChanged(data)
  }

  return (
    <fieldset 
      id={radioGroupId} 
      className="radio-group"
      data-selected={selected}
    >
      {
        radioItems.map((radio, i) => (
          <Input 
            inputId={`radio-${radio}`}
            inputLabel={radio}
            inputName={radioGroupId}
            inputType="radio"
            inputValue={radio}
            key={i}
            valueChanged={(data)=>(selectionChanged(data))}
          />
        ))
      }
    </fieldset>
  )
}

export default RadioGroup