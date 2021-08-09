import React from 'react';
import './App.css';

import Hero from './components/hero/Hero';
import Form from './components/form/Form';
import Button from './components/button/Button';
import Switch from './components/switch/Switch'

const imgUrl = 'https://www.wallpaperimageshd.com/uploads/2019/10/scenery-background-07.jpg'

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero 
        title="Hey Typescript" 
        subTitle="fun"
        backgroundColor="rgba(0,0,0,0.5)"
        backgroundImage={imgUrl}
        maxHeight="90vh"
        filterOpacity={10}
      >
        <Button 
          buttonId="hero-button"
          clickHandle={(data) => { console.log(data) }}
          text="CTA"
          theme="dark"
        />
        <Switch 
          switchID="hero-switch"
          switchLabel="Switch!"
          valueChanged={(id, isOn) => { console.log(id, isOn) }}
        />
        <Switch 
          switchID="nintendo-switch"
          switchLabel="Switch!"
          valueChanged={(id, isOn) => { console.log(id, isOn) }}
        />
      </Hero>
      <div className="wrap">
        <Form />
      </div>
    </div>
  );
}

export default App;
