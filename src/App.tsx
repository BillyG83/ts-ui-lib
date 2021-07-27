import React from 'react';
import './App.css';

import { Form } from './components/form/Form';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Hello Typescript!
        </h1>

        <Form />
      </header>
    </div>
  );
}

export default App;
