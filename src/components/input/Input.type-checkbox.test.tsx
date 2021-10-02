import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react';
import Input from './Input';
import { InputValues } from '../interface'

describe('Input functionality: Checkbox Input', () => {
  let container: HTMLDivElement

  const testType = 'checkbox'
  const testId = 'input-test'
  const testName = 'Input'
  const testInputLabel = 'Test this input'

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
        inputType={testType}
        valueChanged={mockedFunction}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const checkboxInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(checkboxInput).toBeInTheDocument()
  })

  it('renders the input type correctly', () => {
    const checkboxInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(checkboxInput?.type).toBe(testType)
  })

  it('renders the label', () => {
    const checkboxInputLabel = container.querySelector<HTMLInputElement>('[data-testid="input"]')
    expect(checkboxInputLabel?.textContent).toBe(testInputLabel)
  })

  it('fires the mocked function on change with correct data', () => {
    const checkboxInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    checkboxInput && fireEvent.click(checkboxInput)
    expect(mockedFunction).toBeCalledWith({
      checked: true,
      id: testId,
      type: testType,
      value: '',
    })
  })
})
