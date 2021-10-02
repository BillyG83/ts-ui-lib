import React from 'react';
import ReactDOM from 'react-dom'
import RadioGroup from './RadioGroup';
import { fireEvent } from '@testing-library/react'
import { InputValues } from '../interface'

describe('Input functionality: Radio Input', () => {
  let container: HTMLDivElement

  const testId = 'radio-group-test'
  const testItemsArray = ['John', 'Paul', 'George', 'Ringo']

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
      <RadioGroup 
        radioGroupId={testId}
        radioItems={testItemsArray}
        radioChanged={mockedFunction}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const radioGroup = container.querySelector<HTMLFieldSetElement>(`#${testId}`)
    expect(radioGroup).toBeInTheDocument()
  })

  it('renders each radio item', () => {
    const radioInputs = container.querySelectorAll<HTMLInputElement>('[data-testid="input"]')
    expect(radioInputs.length).toBe(testItemsArray.length)
  })

  it('bubbles up expected data when child radio is clicked', async () => {
    const radioGroup = container.querySelector<HTMLFieldSetElement>(`#${testId}`)
    const radioInputs = container.querySelectorAll<HTMLInputElement>('[data-testid="input"] input')
    radioInputs && fireEvent.click(radioInputs[0])
    expect(mockedFunction).toBeCalledWith(
      {
        type: 'radio',
        id: testId,
        value: 'John',
        checked: true
      }
    )
  })
})
