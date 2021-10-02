import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react';
import Input from './Input';
import { InputValues } from '../interface'

describe('Input functionality: Radio Input', () => {
  let container: HTMLDivElement

  const testType = 'radio'
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
    const radioInput = container.querySelector<HTMLInputElement>(`#${testId}`)
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

  it('fires the mocked function on change with correct data', () => {
    const radioInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    radioInput && fireEvent.click(radioInput)
    expect(mockedFunction).toBeCalledWith({
      checked: true,
      id: testId,
      type: testType,
      value: '',
    })
  })
})
