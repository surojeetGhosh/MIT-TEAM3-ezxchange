import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react';
import Currencycalculator from '../components/Currencycalculator';

function Basecurrency() {

    const [base, setBase] = useState("INR");
    const [currency, setcurrency] = useState([]);
    const [ratesList, setRatesList] = useState([]);

    useEffect(() => {
        getrates("USD");
    }, []);

    const getrates = async (base) => {
        const res = await axios.get(`https://api.apilayer.com/fixer/latest?base=${base}&apikey=OD47jKU22Z9k8Oo9JIwS99BaTPhBBNjK`);
        const {rates} = res.data;
        const ratestemp = [];
        for (const [symbol, rate] of Object.entries(rates)) {
            ratestemp.push({ symbol, rate});
            ratestemp.sort((a, b) => a.symbol.localeCompare(b.symbol));
          }
          setRatesList(ratestemp);
        };

        console.log(ratesList);

  return (
    <div>
        <div className='container mt-12 w-3/4 mx-auto h-48 flex flex-row justify-between items-center gap-8'>
            <div className='flex flex-col justify-start w-1/2 h-full items-center p-2 gap-8 font-[Poppins] font-medium rounded-xl shadow-md shadow-gray-500 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-900'>
              <select className="bg-transparent  text-center" size={1} onChange={(e) => {
                  const value = e.target.value;
                  setBase(value);
                  getrates(value);
              }}>
                {ratesList.map((d) => (
                <option value={d.symbol} key={d.symbol}>
                  {d.symbol}
                </option>
              ))}
                
              </select>
        
                <ul className="list-group h-48 overflow-y-scroll p-2">
                {ratesList.map((d) => (
                  <li className="list-group-item p-2" key={d.symbol}>
                    {d.symbol} - {d.rate}
                  </li>
                ))}
                </ul> 
            </div>
            <div className='w-1/2 flex flex-row justify-center items-center h-full shadow-md shadow-gray-500 rounded-xl'>
              <Currencycalculator/>
            </div>
      </div>
      

    
    </div>
  )
}

export default Basecurrency