import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { RecoilRoot } from 'recoil';
import Dashboard from './Dashboard';

function App() {

  return (
    <RecoilRoot>
      <Dashboard />
    </RecoilRoot>
  );
}

export default App;
