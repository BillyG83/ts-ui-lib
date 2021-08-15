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
    inputName="unique-name"
    valueChanged={(data: InputValues) => void}
/>
```

## Props
* **inputId**: string
* **inputName**: string
* **inputLabel**?: string *optional*
* **inputPlaceholder**?: string *optional*
* **inputType**?: string *optional*
* **inputValue**?: string or number *optional*
* **valueChanged**: pass a custom function that takes InputValues as props

### Interfaces
```javascript
interface InputValues {
    checked?: boolean,
    id: string, 
    type: string,
    value?: string, 
}
```