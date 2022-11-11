import React, { useState } from 'react';

import Title from './components/UI/Title';
import Ball from './components/UI/Ball';
import Button from './components/UI/Button';

const Answers = ["Yes", "No"];

function App() {

  const [answers] = useState(Answers);

  let randomValue;
  const shakeHandler = () => {
    let randomValue = answers[Math.floor(Math.random() * answers.length)];
  };

  return (
    <div id="wrapper">
      <Title />
      <Ball value={randomValue} />
      <Button onClick={shakeHandler}/>
    </div>
  );
}

export default App;
