import React from 'react';

import Header from 'components/Header';

import { Counter } from './features/counter/Counter';

const App = () => (
  <div className="App">
    <Header />
    <Counter />
  </div>
);

export default App;
