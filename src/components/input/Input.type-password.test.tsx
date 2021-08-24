import React from 'react';
import ReactDOM from 'react-dom'
import Input from './Input';
import { InputValues } from '../interface'

describe('Input functionality: Password Input', () => {
  let container: HTMLDivElement

  const testType = 'password'
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
    const passwordInput = container.querySelector<HTMLDivElement>(`#${testId}`)
    expect(passwordInput).toBeInTheDocument()
  })

  it('renders the input type correctly', () => {
    const passwordInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(passwordInput?.type).toBe(testType)
  })

  it('renders the default value', () => {
    const passwordInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(passwordInput?.value).toBe(testInputValue)
  })

  it('renders the placeholder', () => {
    const passwordInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(passwordInput?.placeholder).toBe(testInputPlaceholder)
  })

  it('renders the label', () => {
    const passwordInputLabel = container.querySelector<HTMLLabelElement>('[data-testid="input"] > label')
    expect(passwordInputLabel?.textContent).toBe(testInputLabel)
  })

  it('fires the test event on change', () => {
    const passwordInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    if (passwordInput) {
      passwordInput.value = 'test'
      expect(testEvent).toBeCalled
    }
  })
})
