# Input
<p>Input form elements that bubble up their value on change</p>

## import
```javascript
import Input from './components/input/Input'
```

## usage
```javascript
<Input 
    inputId="unique-id"
    inputLabel="This is the label"
    inputName="unique-name"
    inputPlaceholder="placeholder text"
    inputType="text"
    valueChanged={(
        type: string,
        id: string, 
        value: string, 
        checked: boolean
    ) => void}
/>
```

## Props
* **inputId**: string
* **inputName**: string
* **inputLabel**?: string *optional*
* **inputPlaceholder**?: string *optional*
* **inputType**?: string *optional*
* **inputValue**?: string or number *optional*
* **valueChanged**: function that returns { 
    type: string,
    id: string, 
    value: string, 
    checked: boolean
}
          