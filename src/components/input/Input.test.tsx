import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'
import Input from './Input';
import { InputValues } from '../interface'
import { type } from 'os';

describe('Input functionality: Text Input', () => {
  let container: HTMLDivElement

  const testType = 'text'
  const testId = 'input-test'
  const testName = 'Input'
  const inputLabel = 'Test this input'
  const inputPlaceholder = 'Input your text here' 
  const inputValue = 'This is a default value'

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
        inputLabel={inputLabel}
        inputName={testName}
        inputPlaceholder={inputPlaceholder}
        inputType={testType}
        inputValue={inputValue}
        valueChanged={testEvent}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const textInput = container.querySelector(`#${testId}`)
    expect(textInput).toBeInTheDocument()
  })

  it('renders the input type correctly', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(textInput?.type).toBe(testType)
  })

  it('renders the default value', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(textInput?.value).toBe(inputValue)
  })

  it('renders the placeholder', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(textInput?.placeholder).toBe(inputPlaceholder)
  })

  it('renders the label', () => {
    const textInputLabel = container.querySelector<HTMLLabelElement>('[data-testid="input"] > label')
    expect(textInputLabel?.textContent).toBe(inputLabel)
  })

  it('fires the test event on change', () => {
    const textInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    if (textInput) {
      textInput.value = 'test'
      expect(testEvent).toBeCalled
    }
  })
})
