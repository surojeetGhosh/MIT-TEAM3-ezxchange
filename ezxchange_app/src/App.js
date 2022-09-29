import './App.css';
import * as React from 'react'


import LineCharts from './components/home';
import Basecurrency from './components/Basecurrency';

function App() {
  return (
    <div className="bg-[#f7edf4] h-[100vh]">
      <LineCharts/>
      <Basecurrency/>
    </div>
  );
}

export default App;
