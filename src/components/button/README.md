# Button
<p>When clicked will return button ID for validation</p>

## import
```javascript
import Button from './components/button/Button'
```

## usage
```javascript
<Button 
    buttonId={'button'} 
    clickHandle={handleClick}
></Button>
```

## Props
* **buttonId**: string
* **clickHandle**: function returns id as string
* **disabled**?: boolean *optional*
* **icon**?: string *optional*
* **text**?: string *optional*
* **theme**?: dark or light *optional*

          