import React from 'react';
import ReactDOM from 'react-dom'
import Input from './Input';
import { InputValues } from '../interface'

describe('Input functionality: Radio Input', () => {
  let container: HTMLDivElement

  const testType = 'radio'
  const testId = 'input-test'
  const testName = 'Input'
  const testInputLabel = 'Test this input'

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
        inputType={testType}
        valueChanged={testEvent}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const radioInput = container.querySelector<HTMLDivElement>(`#${testId}`)
    expect(radioInput).toBeInTheDocument()
  })

  it('renders the input type correctly', () => {
    const radioInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(radioInput?.type).toBe(testType)
  })

  it('renders the label', () => {
    const radioInputLabel = container.querySelector<HTMLLabelElement>('[data-testid="input"] > label')
    expect(radioInputLabel?.textContent).toBe(testInputLabel)
  })
})
