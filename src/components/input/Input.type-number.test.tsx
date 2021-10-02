import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react';
import Input from './Input';
import { InputValues } from '../interface'

describe('Input functionality: Number Input', () => {
  let container: HTMLDivElement

  const testType = 'number'
  const testId = 'input-test'
  const testName = 'Input'
  const testInputLabel = 'Test this input'
  const testInputPlaceholder = 'Input your number here' 
  const testInputValue = 420

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
    const numberInput = container.querySelector<HTMLInputElement>(`#${testId}`)
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

  it('fires the mocked function on change with correct data', () => {
    const numberInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    numberInput && fireEvent.change(numberInput, {target: {value: 404}})
    expect(mockedFunction).toBeCalledWith({
      checked: false,
      id: testId,
      type: testType,
      value: '404',
    })
  })
})
