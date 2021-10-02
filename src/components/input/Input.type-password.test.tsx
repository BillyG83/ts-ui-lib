import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react';
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

  const mockedFunction = jest.fn(
    (data: InputValues) => {
      return {
        type: data.type,
        id: data.id,
        value: data.value,
        checked: data.checked
      }
    }
  );

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
        valueChanged={mockedFunction}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const passwordInput = container.querySelector<HTMLInputElement>(`#${testId}`)
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

  it('fires the mocked function on change with correct data', () => {
    const passwordInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    passwordInput && fireEvent.change(passwordInput, {target: {value: 'new-test-value'}})
    expect(mockedFunction).toBeCalledWith({
      checked: false,
      id: testId,
      type: testType,
      value: 'new-test-value',
    })
  })
})
