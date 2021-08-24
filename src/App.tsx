import React from 'react'
import './App.css'
import Form from './components/form/Form'
import Hero from './components/hero/Hero'
import Button from './components/button/Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero
        title="Hero Wins!"
      >
        <Button 
          buttonId="hero-button" 
          clickHandle={(id)=>(console.log('button ID:' + id))} 
        />
      </Hero>
      
      <div className="wrap">
        <Form />
      </div>
    </div>
  );
}

export default App;
