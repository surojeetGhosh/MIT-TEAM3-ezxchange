import React, {useState, useEffect} from 'react'
import '../../src/App.css'
import Chart from "react-apexcharts"; 
const axios = require('axios')


export default function LineCharts() {
    const [month, setMonth] = useState(['Jan', 'Feb', 'Mar', 'Apr'])
    const [currency1, setCurrency1] = useState(['USD', 'INR', 'AUD', 'EUR'])
    const [currency2, setCurrency2] = useState(['INR', 'AUD', 'EUR'])
    const [isloading, setIsLoading] = useState(true)
    const [dataArray, setDataArray] = useState(null)
    let initial_values = {"currency_1":'USD', "currency_2":'INR', "week":'w1', "month":month, "quarter":'q1', "year":2022}
    const [fetchData, setFetchData] = useState(initial_values)
    let arr = []
    let arr2 = []
    let currency_country = ['AUD', 'INR', 'USD', 'EUR']
    
    const [dArr, setdArr] = useState([])

    async function fetch_data()
    {
        setIsLoading(true)
        console.log(`${fetchData.year}`)
        let res_data = await axios.get(`https://ezxchange-755d0-default-rtdb.firebaseio.com/${fetchData.year}.json`)
        setDataArray(res_data)

        Object.entries(res_data.data).forEach(function([k,v]){if(v.INR){arr.push(v.INR)}})
        arr = Object.entries(arr).sort(function (a, b) {
            var lt = a[0].split('-');
            var daya = Number(lt[0]);
            var montha = lt[1];
            var yeara = Number(lt[2]);
                var lt = b[0].split('-');
            var dayb = Number(lt[0]);
            var monthb = lt[1];
            var yearb = Number(lt[2]);
            var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return yeara - yearb || MONTH[montha] - MONTH[monthb] || daya - dayb;
        });
        
        arr.map((value, i)=>{
             arr2.push(value.pop(2))
        })
        
        console.log(currency_country)
        setdArr(arr2)
        setIsLoading(false)
    }


    
    const handleFormChange = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
    }


    const handleCurrencyChange1 = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
        console.log(e.target.value)
        setCurrency2(currency_country.splice(e.target.value))
    }

    const handleCurrencyChange2 = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
        console.log(e.target.value)
        setCurrency1(currency_country.splice(e.target.value))
    }

    const handleYearChange = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
        fetch_data()
    }

    const month_arr =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const handleQuarterChange = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
        if(e.target.value === 'q1')
        {
            let month_arr2 = month_arr.slice(0, 3)
            setMonth(month_arr2)
        }
        if(e.target.value === 'q2')
        {
            let month_arr2 = month_arr.slice(3, 6)
            setMonth(month_arr2)
        }
        if(e.target.value === 'q3')
        {
            let month_arr2 = month_arr.slice(6, 9)
            setMonth(month_arr2)
        }
        if(e.target.value === 'q4')
        {
            let month_arr2 = month_arr.slice(9, 12)
            setMonth(month_arr2)
        }
    }



    useEffect(() => {
        fetch_data()
        console.log(dArr)
        if(dArr.length!==0){
            setIsLoading(false)
        }
      }, dataArray);


    // console.log(dataArray?.data)
    //   console.log(Object.keys(dataArray.data))
    //   console.log(Object.values(dataArray.data))
    //   let x = Object.values(dataArray.data)
    //   console.log(x[0])
    //   console.log(x[0]['AED']

    return(
        <div className=''>
            <div className='container mt-12 w-3/4 mx-auto flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-start items-center p-2 gap-8'>
                    <select name="currency_1" className='bg-transparent' value={fetchData.currency_1} onChange={handleCurrencyChange1}>
                        {/* <option value="USD" selected className='p-4'>USA</option>
                        <option value="Country3" className='p-4'>Country3</option>
                        <option value="Country4" className='p-4'>Country4</option>
                        <option value="Country1" className='p-4'>Country1</option>
                        <option value="Country2" className='p-4'>Country2</option> */}
                        {currency_country.map((data, i)=>{
                           return <option value={i} key={i} selected className='p-4'>{data}</option>
                        })}

                    </select>
                    <select name="currency_2" className='bg-transparent' value={fetchData.currency_2} onChange={handleCurrencyChange2}>
                        <option value="INR" selected className='p-4'>USA</option>
                        <option value="Country3" className='p-4'>Country3</option>
                        <option value="Country4" className='p-4'>Country4</option>
                        <option value="Country1" className='p-4'>Country1</option>
                        <option value="Country2" className='p-4'>Country2</option>
                    </select>
                </div>
                <div className='flex flex-row justify-end items-center p-2 gap-8'>
                    <select name="week" className='bg-transparent' value={fetchData.week} onChange={handleFormChange}>
                        <option value="w1" selected className='p-4'>Week 1</option>
                        <option value="w2" className='p-4'>Week 2</option>
                        <option value="w3" className='p-4'>Week 3</option>
                        <option value="w4" className='p-4'>Week 4</option>
                    </select>
                    <select name="month" className='bg-transparent' value={fetchData.month} onChange={handleFormChange}>
                        {/* <option value="m1" selected className='p-4'>Jan</option>
                        <option value="m2" className='p-4'>Feb</option>
                        <option value="m3" className='p-4'>Mar</option>
                        <option value="m4" className='p-4'>Apr</option>
                        <option value="m5" className='p-4'>May</option>
                        <option value="m6" className='p-4'>June</option>
                        <option value="m7" className='p-4'>July</option>
                        <option value="m8" className='p-4'>Aug</option>
                        <option value="m9" className='p-4'>Sept</option>
                        <option value="m10" className='p-4'>Oct</option>
                        <option value="m11" className='p-4'>Nov</option>
                        <option value="m12" className='p-4'>Dec</option> */}


                        {month.map((data, i)=>{
                           return <option value={i} key={i} selected className='p-4'>{data}</option>
                        })}
                    </select>
                    <select name="quarter" className='bg-transparent' value={fetchData.quarter} onChange={handleQuarterChange}>
                        <option value="q1" selected className='p-4'>1st quarter</option>
                        <option value="q2" className='p-4'>2nd quarter</option>
                        <option value="q3" className='p-4'>3rd quarter</option>
                        <option value="q4" className='p-4'>4th quarter</option>
                    </select>
                    <select name="year" className='bg-transparent' value={fetchData.year} onChange={handleYearChange}>
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
            
            <div className='container mx-auto flex flex-col justify-center items-center h-1/2 overflow-scroll w-3/4 mt-4  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent' >
            {isloading && <img src='spinner.gif' className='mt-36 w-16'></img>}
            
            {!isloading && <Chart className=''
                    width= {"400%"}
                    height= {"300%"}
                    options ={{chart: {
                        type: 'line',
                        // height: 350,

                    
                        toolbar: {
                        show: false
                        },
                        zoom: {
                        enabled: true
                        }
                    },
                    xaxis:{
                        tickAmount: 20,
                    },
                    stroke:{
                        curve:'smooth'
                    },
                    markers: {
                        discrete: [{
                          seriesIndex: 0,
                          dataPointIndex: 7,
                          fillColor: '#ff0000',
                          strokeColor: '#fff',
                          size: 5,
                          shape: "circle" // "circle" | "square" | "rect"
                        }, {
                          seriesIndex: 0,
                          dataPointIndex: 11,
                          fillColor: '#ff0000',
                          strokeColor: '#eee',
                          size: 5,
                          shape: "circle" // "circle" | "square" | "rect"
                        }]
                      },
                    legend: {
                        position: 'right',
                        offsetY: 40
                    },
                    }}
                    series = {[{
                        name: 'Currency',
                        data : dArr
                    }]}

                    type="line"
                />}
            </div>
        </div>
    )
}