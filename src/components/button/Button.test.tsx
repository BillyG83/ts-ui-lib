import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'
import Button from './Button';

describe('Button functionality', () => {
  let container: HTMLDivElement
  let returnedId: string
  let testDisabled: boolean
  const testId = 'button-test'
  const testEvent = (id: string) => returnedId = id
  const testTheme = 'dark'
  const testText = 'button test'

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <Button 
        buttonId={testId} 
        clickHandle={testEvent}
        theme={testTheme}
        text={testText}
        disabled={testDisabled}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const testButton = container.querySelector(`#${testId}`)
    expect(testButton).toBeInTheDocument()
  })

  it('renders text correctly', () => {
    const testButton = container.querySelector(`#${testId}`)
    expect(testButton?.textContent).toBe(testText)
  })

  it('renders theme correctly', () => {
    const testButton = container.querySelector(`#${testId}`)
    expect(testButton?.classList.contains(`button--${testTheme}`)).toBe(true)
  })

  it('returns its ID in the click event', () => {
    const testButton = container.querySelector(`#${testId}`)
    testButton && fireEvent.click(testButton)
    expect(returnedId).toBe(testId)
  })
})

describe('Button disabled', () => {
  let container: HTMLDivElement
  let returnedId: string
  const testId = 'button-test'
  const testEvent = (id: string) => returnedId = id
  const testTheme = 'dark'
  const testText = 'button test'

  beforeEach(() => {
    returnedId = 'this will not change'
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <Button 
        buttonId={testId} 
        clickHandle={testEvent}
        theme={testTheme}
        text={testText}
        disabled={true}
      />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const testButton = container.querySelector(`#${testId}`)
    expect(testButton).toBeInTheDocument()
  })

  it('button is not clickable', () => {
    const testButton = container.querySelector(`#${testId}`)
    testButton && fireEvent.click(testButton)
    expect(returnedId).toBe('this will not change')
  })
})
