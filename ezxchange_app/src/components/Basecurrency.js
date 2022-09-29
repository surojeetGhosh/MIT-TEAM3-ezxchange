import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react';

function Basecurrency() {

    const [base, setBase] = useState("INR");
    const [currency, setcurrency] = useState([]);
    const [ratesList, setRatesList] = useState([]);
    console.log(base);

    // const getCurrency = async () => {
    //     const response = await fetch(`https://api.apilayer.com/fixer/latest?base=${base}&apikey=M5fqn8ZahghNdaS01Xl52mJJBSDm0Mly`);
    //     const data = await response.json();
    //     setcurrency(data.rates);
    //     console.log(data);
    // }

    useEffect(() => {
        getrates("USD");
    }, []);

    const getrates = async (base) => {
        const res = await axios.get(`https://api.apilayer.com/fixer/latest?base=${base}&apikey=OD47jKU22Z9k8Oo9JIwS99BaTPhBBNjKdgdg`);
        const {rates} = res.data;
        const ratestemp = [];
        for (const [symbol, rate] of Object.entries(rates)) {
            ratestemp.push({ symbol, rate});
            ratestemp.sort((a, b) => a.symbol.localeCompare(b.symbol));
           // ratestemp.splice(20, ratestemp.length - 20);
          }
          setRatesList(ratestemp);
        };

        console.log(ratesList);

  return (
    <>

        <div className='container mt-12 w-3/4 mx-auto flex flex-row justify-between items-center'>
            <div className='flex flex-col justify-start items-center p-2 gap-8 font-[Poppins] font-medium rounded-xl shadow-md shadow-gray-500 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-900'>
              <select className="bg-transparent w-full text-center" size={1} onChange={(e) => {
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
    </div>
    
    
    </>
  )
}

export default Basecurrency