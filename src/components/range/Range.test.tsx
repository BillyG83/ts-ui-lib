import React from 'react';
import ReactDOM from 'react-dom'
import Range from './Range';

describe('Input functionality: Checkbox Input', () => {
  let container: HTMLDivElement

  const testId = 'range-test'
  const testLabel = 'Score something with a range slider'

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
})
