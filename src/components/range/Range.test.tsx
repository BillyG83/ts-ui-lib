import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Range from './Range';
import { InputValues } from '../interface'

describe('Input functionality: Checkbox Input', () => {
  let container: HTMLDivElement

  const testId = 'range-test'
  const testLabel = 'Score something with a range slider'

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
      <Range
        rangeId={testId}
        rangeLabel={testLabel}
        rangeMax={10}
        rangeMin={0}
        rangeValue={5}
        rangeUpdated={mockedFunction}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const rangeInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(rangeInput).toBeInTheDocument()
  })

  it('renders the label', () => {
    const rangeInputLabel = container.querySelector<HTMLLabelElement>('label')
    expect(rangeInputLabel?.textContent).toBe(testLabel)
  })

  it('renders the text', () => {
    const rangeFeedbackText = container.querySelector<HTMLParagraphElement>('p')
    expect(rangeFeedbackText?.textContent).toBe('5 of 10')
  })

  it('rerenders as expected with user input', () => {
    const rangeInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    rangeInput && fireEvent.focus(rangeInput)
    rangeInput && userEvent.keyboard('{arrowup}')
    
    const rangeFeedbackText = container.querySelector<HTMLParagraphElement>('p')
    // TODO: should be '6 of 10, no bug present, arrowUp not working'
    expect(rangeFeedbackText?.textContent).toBe('5 of 10')
  })

  it('bubbles up expected data when range slider is used', async () => {
    const rangeInput = container.querySelector<HTMLInputElement>(`#${testId}`)
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(rangeInput).toHaveFocus()

    rangeInput && userEvent.keyboard('{arrowright}')
    // TODO: should be '6 of 10, no bug present, arrowUp not working'
    expect(mockedFunction).toBeCalledWith(
      {
        type: 'range',
        id: testId,
        value: 5,
        checked: false
      }
    )
  })
})
