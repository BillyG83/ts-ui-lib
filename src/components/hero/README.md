# Hero
<p>A full width image or background color with content on top</p>

## import
```javascript
import Hero from './components/hero/Hero'
```

## usage
```javascript
<Hero 
    title={'Welcome to here!'} 
    backgroundImage="https://www.fillmurray.com/1000/1000"
></Hero>
```

## Props
* **title**: string
* **backgroundColor**?: string HEX, RGB, etc
* **backgroundImage**?: string valid image url
* **children**?: Other elements
* **filterColor**?: string HEX, RGB, etc
* **filterOpacity**?: between 0 and 1 (eg 0.5 is half)
* **maxHeight**?: string 500px, 50vh, 50% etc
* **subTitle**?: string
          