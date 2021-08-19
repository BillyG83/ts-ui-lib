import React from 'react';
import ReactDOM from 'react-dom'
import Input from './Input';
import { InputValues } from '../interface'

describe('Input functionality: Text Input', () => {
  let container: HTMLDivElement

  const testType = 'text'
  const testId = 'input-test'
  const testName = 'Input'
  const testInputLabel = 'Test this input'
  const testInputPlaceholder = 'Input your text here' 
  const testInputValue = 'This is a default value'

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
    const textInput = container.querySelector<HTMLDivElement>(`#${testId}`)
    expect(textInput).toBeInTheDocument()
  })

  it('renders the input type correctly', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(textInput?.type).toBe(testType)
  })

  it('renders the default value', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(textInput?.value).toBe(testInputValue)
  })

  it('renders the placeholder', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(textInput?.placeholder).toBe(testInputPlaceholder)
  })

  it('renders the label', () => {
    const textInputLabel = container.querySelector<HTMLLabelElement>('[data-testid="input"] > label')
    expect(textInputLabel?.textContent).toBe(testInputLabel)
  })

  it('fires the test event on change', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    if (textInput) {
      textInput.value = 'test'
      expect(testEvent).toBeCalled
    }
  })
})
