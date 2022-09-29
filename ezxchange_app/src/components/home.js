import React, {useState, useEffect} from 'react'
import Chart from "react-apexcharts"; 
const axios = require('axios')


export default function LineCharts() {

    const [dataArray, setDataArray] = useState(null)
    let initial_values = {"currency_1":'USD', "currency_2":'INR', "week":null, "month":null, "quarter":null, "year":2022}
    const [fetchData, setFetchData] = useState(initial_values)
    const arr = []
    const [dArr, setdArr] = useState([])
    async function fetch_data()
    {
        console.log(`${fetchData.year}`)
        let res_data = await axios.get(`https://ezxchange-755d0-default-rtdb.firebaseio.com/${fetchData.year}.json`)
        setDataArray(res_data)
        // arr = []
        Object.entries(res_data.data).forEach(function([k,v]){if(v.INR){arr.push(v.INR)}})
        console.log(arr)
        setdArr(arr)
    }

    const handleFormChange = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
    }
    const handleYearChange = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setFetchData({ ...fetchData, [name]: value })
        fetch_data()
    }


    useEffect(() => {
        fetch_data()
      }, dataArray);


    // console.log(dataArray?.data)
    //   console.log(Object.keys(dataArray.data))
    //   console.log(Object.values(dataArray.data))
    //   let x = Object.values(dataArray.data)
    //   console.log(x[0])
    //   console.log(x[0]['AED']

    return(
        <div className='border-2 border-black'>
            <div className='container mt-12 w-3/4 border-2 border-black mx-auto flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-start items-center border-2 border-black p-2 gap-8'>
                    <select name="currency_1" className='bg-transparent' value={fetchData.currency_1} onChange={handleFormChange}>
                        <option value="USD" selected className='p-4'>USA</option>
                        <option value="Country3" className='p-4'>Country3</option>
                        <option value="Country4" className='p-4'>Country4</option>
                        <option value="Country1" className='p-4'>Country1</option>
                        <option value="Country2" className='p-4'>Country2</option>
                    </select>
                    <select name="currency_2" className='bg-transparent' value={fetchData.currency_2} onChange={handleFormChange}>
                        <option value="INR" selected className='p-4'>USA</option>
                        <option value="Country3" className='p-4'>Country3</option>
                        <option value="Country4" className='p-4'>Country4</option>
                        <option value="Country1" className='p-4'>Country1</option>
                        <option value="Country2" className='p-4'>Country2</option>
                    </select>
                </div>
                <div className='flex flex-row justify-end items-center border-2 border-black p-2 gap-8'>
                    <select name="week" className='bg-transparent' value={fetchData.week} onChange={handleFormChange}>
                        <option value="w1" selected className='p-4'>Week 1</option>
                        <option value="w2" className='p-4'>Week 2</option>
                        <option value="w3" className='p-4'>Week 3</option>
                        <option value="w4" className='p-4'>Week 4</option>
                    </select>
                    <select name="month" className='bg-transparent' value={fetchData.month} onChange={handleFormChange}>
                        <option value="m1" selected className='p-4'>Jan</option>
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
                        <option value="m12" className='p-4'>Dec</option>
                    </select>
                    <select name="quarter" className='bg-transparent' value={fetchData.quarter} onChange={handleFormChange}>
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
            
            <div className='container mx-auto border-2 border-black flex flex-col justify-center items-center h-1/2 w-3/4 p-2 mt-4'>
                <Chart
                    width= {"470%"}
                    height= {"200%"}
                    options ={{chart: {
                        type: 'line',
                        height: 350,
                        toolbar: {
                        show: false
                        },
                        zoom: {
                        enabled: true
                        }
                    },
                    legend: {
                        position: 'right',
                        offsetY: 40
                    },
                    }}
                    series = {[{
                        name: 'Currency',
                        // data: [31, 40, 28, 51, 42, 109, 100, 124, 108, 150, 102, 214, 97]
                        data : dArr
                        
                    }]}

                    type="line"
                />
            </div>
        </div>
    )
}