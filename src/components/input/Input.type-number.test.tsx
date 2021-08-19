import React from 'react';
import ReactDOM from 'react-dom'
import Input from './Input';
import { InputValues } from '../interface'
import { Type } from 'typescript';

describe('Input functionality: Text Input', () => {
  let container: HTMLDivElement

  const testType = 'number'
  const testId = 'input-test'
  const testName = 'Input'
  const testInputLabel = 'Test this input'
  const testInputPlaceholder = 'Input your text here' 
  const testInputValue = 420

  const testEvent = (data: InputValues) => {
    return {
      type: data.type,
      id: data.id,
      value: data.value,
      checked: data.checked
    }
  }

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <Input 
        inputId={testId} 
        inputLabel={testInputLabel}
        inputName={testName}
        inputPlaceholder={testInputPlaceholder}
        inputType={testType}
        inputValue={testInputValue}
        valueChanged={testEvent}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const numberInput = container.querySelector<HTMLDivElement>(`#${testId}`)
    expect(numberInput).toBeInTheDocument()
  })

  it('renders the input type correctly', () => {
    const numberInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(numberInput?.type).toBe(testType)
  })

  it('renders the default value', () => {
    const numberInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(numberInput?.value).toBe(`${testInputValue}`)
  })

  it('renders the placeholder', () => {
    const numberInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(numberInput?.placeholder).toBe(testInputPlaceholder)
  })

  it('renders the label', () => {
    const numberInputLabel = container.querySelector<HTMLLabelElement>('[data-testid="input"] > label')
    expect(numberInputLabel?.textContent).toBe(testInputLabel)
  })

  it('fires the test event on change', () => {
    const numberInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    if (numberInput) {
      numberInput.value = '404'
      expect(testEvent).toBeCalled
    }
  })
})
