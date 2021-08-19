import React from 'react';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'
import Hero from './Hero'

describe('Hero Banner', () => {
  let container: HTMLDivElement

  const TestButton: React.FC = () => (
    <button data-testid="test-button">
      Hero Test Button
    </button>
  )

  const testTitle = 'Test Title'
  const testSubTitle = 'test sub title'
  const testBackgroundColor = 'blue'
  const testBackgroundImage = 'https://www.fillmurray.com/2000/2000'
  const testMaxHeight = '80vh'
  const testFilterColor = 'rgb(0, 0, 0)'
  const testFilterOpacity = 0.25

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <Hero
        title={testTitle}
        subTitle={testSubTitle}
        backgroundImage={testBackgroundImage}
        backgroundColor={testBackgroundColor}
        maxHeight={testMaxHeight}
        filterColor={testFilterColor}
        filterOpacity={testFilterOpacity}
      >
        <TestButton />
        <p data-testid="test-text">Test text child</p>
      </Hero>, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders the component', () => {
    const hero = container.querySelector<HTMLDivElement>('[data-testid="hero"]')
    expect(hero).toBeInTheDocument()
  })

  it('renders the title', () => {
    const title = container.querySelector<HTMLTitleElement>('[data-testid="title"]')
    expect(title?.textContent).toBe(testTitle)
  })

  it('renders the sub title', () => {
    const subTitle = container.querySelector<HTMLParagraphElement>('[data-testid="subTitle"]')
    expect(subTitle?.textContent).toBe(testSubTitle)
  })

  it('renders the background image', () => {
    const hero = container.querySelector<HTMLDivElement>('[data-testid="hero"]')
    expect(hero?.style?.backgroundImage).toBe(`url(${testBackgroundImage})`)
  })

  it('renders the background color', () => {
    const hero = container.querySelector<HTMLDivElement>('[data-testid="hero"]')
    expect(hero?.style?.backgroundColor).toBe(testBackgroundColor)
  })

  it('uses the max height property', () => {
    const hero = container.querySelector<HTMLDivElement>('[data-testid="hero"]')
    expect(hero?.style?.maxHeight).toBe(testMaxHeight)
  })

  it('renders the background filter and opacity', () => {
    const heroBgFilter = container.querySelector<HTMLSpanElement>('[data-testid="hero__bg-filter"]')
    expect(heroBgFilter?.style?.backgroundColor).toBe(testFilterColor)
    expect(heroBgFilter?.style?.opacity).toBe(`${testFilterOpacity}`)
  })

  it('renders children elements passed to it', () => {
    const heroTestChildButton = container.querySelector<HTMLButtonElement>('[data-testid="test-button"]')
    const heroTestChildText = container.querySelector<HTMLButtonElement>('[data-testid="test-text"]')
    expect(heroTestChildButton).toBeInTheDocument()
    expect(heroTestChildText).toBeInTheDocument()
  })
})
