import './App.css';
import * as React from 'react'


import LineCharts from './components/home';
import Basecurrency from './components/Basecurrency';
import ExcTable from './components/ExcTable';

function App() {
  return (
    <div className="bg-[#f7edf4] h-max">
      <LineCharts/>
      <Basecurrency/>
      <ExcTable/>
    </div>
  );
}

export default App;
