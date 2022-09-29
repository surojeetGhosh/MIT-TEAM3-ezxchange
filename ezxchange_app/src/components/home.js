import React, {useState, useEffect} from 'react'
import '../../src/App.css'

import Chart from "react-apexcharts"; 
import { isCurrencyExist, yearly } from './routines';
import { daily } from './routines';
import { quarter } from './routines';
import { month } from './routines';
import { week } from './routines';
import { countryCode } from './routines';
import { MaxMin } from './routines';
import { MaxMin2 } from './routines';
import CountryCode from "./CountryCode";

const axios = require('axios')


export default function LineCharts() {

    let null_index = []
    const currency_country = CountryCode;
    const [currency, setCurrency] = useState('INR')
    const [isloading, setIsLoading] = useState(true)
    const [dataArray, setDataArray] = useState(null)
    const [year, setYear] = useState(2022)
    const [select, setSelect] = useState('year')
    const [minMax, setminMax] = useState([])
    const [minMaxDate, setminMaxDate] = useState({})
    const [sortedDataArray, setSortedDataArray] = useState([])

    let arr = []
    
    const [dArr, setdArr] = useState([])

    async function fetch_data()
    {
        setIsLoading(true)
        let res_data = await axios.get(`https://ezxchange-755d0-default-rtdb.firebaseio.com/${year}.json`)
        setDataArray(res_data)

        var sortedData = Object.entries(res_data.data).sort(function (a, b) {
            var lt = a[0].split('-');
            var daya = Number(lt[0]);
            var montha = lt[1];
            var yeara = Number(lt[2]);
                 lt = b[0].split('-');
            var dayb = Number(lt[0]);
            var monthb = lt[1];
            var yearb = Number(lt[2]);
            var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return yeara - yearb || MONTH[montha] - MONTH[monthb] || daya - dayb;
        });
        setSortedDataArray(sortedData)
        let minmaxIdx = MaxMin(sortedData, currency)
        setminMax(minmaxIdx)
        let minmaxData = MaxMin2(sortedData, currency)
        setminMaxDate(minmaxData)
        console.log(isCurrencyExist(sortedData, currency))
        if(isCurrencyExist(sortedData, currency)){
            Object.entries(sortedData).forEach(function([k,v]){
                if(v[1][currency] === undefined){
                    arr[v[0] + " Not Available"] = null;
                    null_index.push(v[0])
                }
                else arr[v[0]] = v[1][currency]
            })
            
            setdArr(arr)
        } else {
            setdArr({});
        }
        setIsLoading(false)
    }

    async function fetch_data2(curr)
    {
        setIsLoading(true)
        let res_data = await axios.get(`https://ezxchange-755d0-default-rtdb.firebaseio.com/${year}.json`)
        setDataArray(res_data)

        var sortedData = Object.entries(res_data.data).sort(function (a, b) {
            var lt = a[0].split('-');
            var daya = Number(lt[0]);
            var montha = lt[1];
            var yeara = Number(lt[2]);
                 lt = b[0].split('-');
            var dayb = Number(lt[0]);
            var monthb = lt[1];
            var yearb = Number(lt[2]);
            var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return yeara - yearb || MONTH[montha] - MONTH[monthb] || daya - dayb;
        });

        setSortedDataArray(sortedData)
        let minmaxIdx = MaxMin(sortedData, curr);
        setminMax(minmaxIdx);
        let minmaxData = MaxMin2(sortedData, currency)
        setminMaxDate(minmaxData)
        console.log(isCurrencyExist(sortedData, curr))
        if(isCurrencyExist(sortedData, curr)){
            Object.entries(sortedData).forEach(function([k,v]){
                if(v[1][curr] === undefined){
                    arr[v[0] + " Not Available"] = null;
                    null_index.push(v[0])
                }
                else arr[v[0]] = v[1][curr]
            })
            
            setdArr(arr)
        } else {
            setdArr({});
        }
        setIsLoading(false)
    }

    async function fetch_data3(year_curr)
    {
        setIsLoading(true)
        let res_data = await axios.get(`https://ezxchange-755d0-default-rtdb.firebaseio.com/${year_curr}.json`)
        setDataArray(res_data)

        var sortedData = Object.entries(res_data.data).sort(function (a, b) {
            var lt = a[0].split('-');
            var daya = Number(lt[0]);
            var montha = lt[1];
            var yeara = Number(lt[2]);
                 lt = b[0].split('-');
            var dayb = Number(lt[0]);
            var monthb = lt[1];
            var yearb = Number(lt[2]);
            var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return yeara - yearb || MONTH[montha] - MONTH[monthb] || daya - dayb;
        });

        setSortedDataArray(sortedData)
        let minmaxIdx = MaxMin(sortedData, currency)
        setminMax(minmaxIdx)
        let minmaxData = MaxMin2(sortedData, currency)
        setminMaxDate(minmaxData)
        console.log(isCurrencyExist(sortedData, currency))
        if(isCurrencyExist(sortedData, currency)){
            Object.entries(sortedData).forEach(function([k,v]){
                if(v[1][currency] === undefined){
                    arr[v[0] + " Not Available"] = null;
                    null_index.push(v[0])
                }
                else arr[v[0]] = v[1][currency]
            })
            
            setdArr(arr)
        } else {
            setdArr({});
        }
        setIsLoading(false)
    }


    const handleCurrencyChange2 = (e)=>{
        setCurrency(e.target.value)
        fetch_data2(e.target.value)
    }

    const handleSelectionChange = (e)=>{
        setSelect(e.target.value)
        if(e.target.value === 'year'){
            let array_yearly = yearly(sortedDataArray, currency)
            setdArr(array_yearly)
        }

        else if(e.target.value === 'quarter'){
            let array_quarterly = quarter(sortedDataArray, currency)
            setdArr(array_quarterly)
        }

        else if(e.target.value === 'month'){
            let array_monthly = month(sortedDataArray, currency)
            setdArr(array_monthly)
        }

        else if(e.target.value === 'week'){
            let array_weekly = week(sortedDataArray, currency)
            setdArr(array_weekly)
        }

        else if(e.target.value === 'daily'){
            let array_daily = daily(sortedDataArray, currency)
            setdArr(array_daily)
        }
    }

    const handleYearChange = (e)=>{
        setYear(e.target.value)
        fetch_data3(e.target.value)
    }

    useEffect(() => {
        fetch_data()
        if(dArr.length!==0){
            setIsLoading(false)
        }

      }, dataArray);



    return(
        <div>
            <div className='container mt-12 w-3/4 mx-auto flex flex-row justify-between items-center shadow-md shadow-gray-500 p-2 rounded-xl'>
                <div className='flex flex-row justify-start items-center p-2 gap-8'>
                    <select name="currency_1" className='bg-transparent font-[Poppins] font-medium'>
                        <option value="USD" selected className='p-4'>USA</option>
                    </select>
                    <h1 className='font-[Poppins] font-bold'>VS</h1>
                    <select name="currency_2" className='bg-transparent font-[Poppins] font-medium' onChange={handleCurrencyChange2}>
                        {currency_country.map((data, i)=>(
                            <option value={data} key={i} className='p-4'>{data}</option>
                        ))}
                    </select>
                </div> 
                <div className='flex flex-row justify-end items-center p-2 gap-8 font-[Poppins] font-medium'>
                    <div className='flex flex-row justify-center items-center gap-6' onChange={handleSelectionChange}>
                        <div className='gap-2 flex flex-row justify-center items-center'> 
                            <input type="radio" id='daily' value="daily" name='selection' select="selected"></input>
                            <label for="daily">Daily</label>
                        </div>
                        <div className='gap-2 flex flex-row justify-center items-center'> 
                            <input type="radio" id='week' value="week" name='selection'></input>
                            <label for="week">Weekly</label>
                        </div>
                        <div className='gap-2 flex flex-row justify-center items-center'> 
                            <input type="radio" id='month' value="month" name='selection'></input>
                            <label for="month">Monthly</label>
                        </div>
                        <div className='gap-2 flex flex-row justify-center items-center'> 
                            <input type="radio" id='quarter' value="quarter" name='selection'></input>
                            <label for="quarter">Quarterly</label>
                        </div>
                        <div className='gap-2 flex flex-row justify-center items-center'> 
                            <input type="radio" id='year' value="year" name='selection'></input>
                            <label for="year">Yearly</label>
                        </div>
                    </div>
                    
                    <select name="year" className='bg-transparent' value={year} onChange={handleYearChange}>
                        <option value="2022" selected className='p-4'>2022</option>
                        <option value="2021" className='p-4'>2021</option>
                        <option value="2020" className='p-4'>2020</option>
                        <option value="2019" className='p-4'>2019</option>
                        <option value="2018" className='p-4'>2018</option>
                        <option value="2017" className='p-4'>2017</option>
                        <option value="2016" className='p-4'>2016</option>
                        <option value="2015" className='p-4'>2015</option>
                        <option value="2014" className='p-4'>2014</option>
                        <option value="2013" className='p-4'>2013</option>
                        <option value="2012" className='p-4'>2012</option>
                    </select>
                </div>
            </div>
            <div className='container mx-auto flex flex-col gap-4 justify-center items-center h-max w-3/4 mt-4 p-2 shadow-sm shadow-gray-500 rounded-xl'>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='font-[Poppins] font-bold text-red py-4 text-xl'>Legends</h1>
                </div>

                {!isloading && <div className='flex flex-row justify-center items-center gap-6'>
                    <h1 className='font-[Poppins] font-medium'>Lowest Exchange Rate</h1>
                    <h1 className='font-[Poppins] font-medium'>{minMaxDate['Max'][0]}</h1>
                    <h1 className='font-[Poppins] font-medium'>{minMaxDate['Max'][1]}</h1>
                </div>}
                {!isloading && <div className='flex flex-row justify-center items-center gap-6'>
                    <h1 className='font-[Poppins] font-medium'>Highest Exchange Rate</h1>
                    <h1 className='font-[Poppins] font-medium'>{minMaxDate['Min'][0]}</h1>
                    <h1 className='font-[Poppins] font-medium'>{minMaxDate['Min'][1]}</h1>
                </div>}
            </div>
            
            <div className='container mx-auto flex flex-col justify-center items-center h-96 w-3/4 mt-4 p-2'>
                {isloading && <img src='spinner.gif' alt='loader' className='mt-36 w-16'></img>}
            
                {!isloading && select==='daily' && <Chart className='w-full h-max p-2 shadow-md rounded-xl shadow-gray-600'
                    width= {"100%"}
                    height= {"100%"}
                    options ={{chart: {
                        type: 'line',
                        toolbar: {
                        show: false,
                        autoSelected: 'pan'
                        },
                        zoom: {
                        enabled: false
                        }
                    },
                    tooltip: {
                        theme: "dark"
                      },
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.55,
                          opacityTo: 0
                        }
                      },
                    grid:{
                        show:false
                    },
                    title: {
                        text: 'EzXchange',
                        align: 'Center',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                          fontSize:  '20px',
                          fontWeight:  'bold',
                          fontFamily:  'Poppins',
                          color:  '#263238'
                        },
                    },
                    xaxis:{
                        offsetY:20,
                        labels: {
                            show: true,
                            align: 'right',
                            minWidth: 0,
                            maxWidth: 160,
                            style: {
                                colors: [],
                                fontSize: '12px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-yaxis-label',
                            }},
                        tickAmount: 10,
                        categories: Object.keys(dArr),
                        title: {
                            text: 'Time Stamp',
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: 'black',
                                fontSize: '15px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-xaxis-title',
                            },
                        },
                    },
                    yaxis:{
                        labels: {
                            show: true,
                            align: 'right',
                            minWidth: 0,
                            maxWidth: 160,
                            offsetX:-7,
                            style: {
                                colors: [],
                                fontSize: '12px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-yaxis-label',
                            }},
                        title: {
                            text: `Currency`,
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: 'black',
                                fontSize: '15px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-xaxis-title',
                            },
                        },
                    },
                    stroke:{
                        curve:'smooth'
                    },
                    noData: {
                        text: 'Missing Data',
                        align: 'center',
                        verticalAlign: 'middle',
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                          color: undefined,
                          fontSize: '14px',
                          fontFamily: undefined
                        }
                      },
                    markers: {
                        discrete: [{
                            seriesIndex: 0,
                            dataPointIndex: minMax[0],
                            fillColor: '#ff0000',
                            strokeColor: '#fff',
                            size: 10,
                            shape: "circle" 
                          }, {
                            seriesIndex: 0,
                            dataPointIndex: minMax[1],
                            fillColor: '#00ff00',
                            strokeColor: '#eee',
                            size: 10,
                            shape: "circle"
                          }]
                      },
                    legend: {
                        position: 'right',
                        offsetY: 40,
                    },
                    }}
                    series = {[{
                        name: 'Currency',
                        data: Object.values(dArr)
                    }]}

                    type="line"
                />}



                {!isloading && select!=='daily' && <Chart className='w-full h-max p-2 shadow-md rounded-xl shadow-gray-600'
                    width= {"100%"}
                    height= {"100%"}
                    options ={{chart: {
                        type: 'line',
                        toolbar: {
                        show: false,
                        autoSelected: 'pan'
                        },
                        zoom: {
                        enabled: false
                        }
                    },
                    tooltip: {
                        theme: "dark"
                      },
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.55,
                          opacityTo: 0
                        }
                      },
                    grid:{
                        show:false
                    },
                    title: {
                        text: 'EzXchange',
                        align: 'Center',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                          fontSize:  '20px',
                          fontWeight:  'bold',
                          fontFamily:  'Poppins',
                          color:  '#263238'
                        },
                    },
                    xaxis:{
                        offsetY:20,
                        labels: {
                            show: true,
                            align: 'right',
                            minWidth: 0,
                            maxWidth: 160,
                            style: {
                                colors: [],
                                fontSize: '12px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-yaxis-label',
                            }},
                        tickAmount: 10,
                        categories: Object.keys(dArr),
                        title: {
                            text: 'Time Stamp',
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: 'black',
                                fontSize: '15px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-xaxis-title',
                            },
                        },
                    },
                    yaxis:{
                        labels: {
                            show: true,
                            align: 'right',
                            minWidth: 0,
                            maxWidth: 160,
                            offsetX:-7,
                            style: {
                                colors: [],
                                fontSize: '12px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-yaxis-label',
                            }},
                        title: {
                            text: `Currency`,
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: 'black',
                                fontSize: '15px',
                                fontFamily: 'Poppins Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                cssClass: 'apexcharts-xaxis-title',
                            },
                        },
                    },
                    stroke:{
                        curve:'smooth'
                    },
                    noData: {
                        text: 'Missing Data',
                        align: 'center',
                        verticalAlign: 'middle',
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                          color: undefined,
                          fontSize: '14px',
                          fontFamily: undefined
                        }
                      },
                    
                    legend: {
                        position: 'right',
                        offsetY: 40,
                    },
                    }}
                    series = {[{
                        name: 'Currency',
                        data: Object.values(dArr)
                    }]}

                    type="line"
                />}







            </div>
        </div>
    )
}