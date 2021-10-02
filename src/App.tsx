import React, { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import Hero from './components/hero/Hero'
import Button from './components/button/Button'

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    theme === 'dark' ?
    setTheme('light')
    : setTheme('dark')
  }

  return (
    <div className={`App ${theme}`}>
      <Hero
        title="Hero Wins!"
      >
        <Button 
          buttonId="hero-button" 
          clickHandle={toggleTheme} 
        />
      </Hero>
      
      <div className="wrap">
        <Form />
      </div>
    </div>
  );
}

export default App;
