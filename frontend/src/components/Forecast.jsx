import React, { useState, useEffect } from 'react'
import AreaChart from './AreaChart'
import logo from './../src/logo/logo.png'
import jsondata from '../assets/data_forecast.json'
import loading from '../assets/loading.webp'
const Frecast = () => {
  const [data, setData] = useState();
  const [isLoad, setIsLoad] =useState(false);
  useEffect(() => {
    init();
    const delayedFunction = () => {
      // Your function logic here
      setIsLoad(true);
    };

    // Call the delayedFunction after 5 seconds
    const timeoutId = setTimeout(delayedFunction, 5000);

    // Clear the timeout to prevent the function from being called if the component unmounts before 5 seconds
    return () => clearTimeout(timeoutId);
  }, [data]);

  const init = () => {
    setData(jsondata);
    // const dates = jsondata.Daily.map(entry => entry.Date);
    // const dailyHighs = jsondata.Daily.map(entry => entry["Daily High"]);
    // const dailyLows = jsondata.Daily.map(entry => entry["Daily Low"]);
    // const dailyHighsNumbers = dailyHighs.map(high => parseFloat(high.replace('¥', '')));
    // const dailyLowsNumbers = dailyLows.map(high => parseFloat(high.replace('¥', '')));
  };
  if (!data || !data.Daily) {
    return <div>Loading...</div>; // Add loading state until data is fetched
  }
  return (
    <div>
    <div>
      <p className='mx-auto max-w-5xl pt-10 text-[#FFFFFF]/[.88] text-[25px]'>
        Explore short-term USD to JPY forecast for today, tomorrow, this week, and next week as well as long-term US Dollar vs Japanese Yen prediction for 2024, 2025 to 2030 and beyond
      </p>
    </div>
    {isLoad ? (
      <div>
  <div className='flex gap-10 justify-center pt-10'>
    <div className='py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg'>
      <p className='text-[20px] text-white/[0.68]'>5-Days Prediction</p>
      <div>
        <p className='text-[40px] text-white/[0.68] font-bold'>
          {data.Daily.length >= 6 && data.Daily[5]['Daily High']}
        </p>
      </div>
    </div>
    <div className='py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg'>
      <p className='text-[20px] text-white/[0.68]'>1-week Prediction</p>
      <div>
        <p className='text-[40px] text-white/[0.68] font-bold'>
          {data.Daily.length >= 8 && data.Daily[7]['Daily High']}
        </p>
      </div>
    </div>
    <div className='py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg'>
      <p className='text-[20px] text-white/[0.68]'>1-Month Prediction</p>
      <div>
        <p className='text-[40px] text-white/[0.68] font-bold'>
          {data.Daily.length > 0 && data.Daily[data.Daily.length - 1]['Daily High']}
        </p>
      </div>
    </div>
    <div className='py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg'>
      <p className='text-[20px] text-white/[0.68]'>1-Year Prediction</p>
      <div>
        <p className='text-[40px] text-white/[0.68] font-bold'>
          {data.Yearly.length > 0 && data.Yearly[0]['Yearly Low']}
        </p>
      </div>
    </div>
    <div className='py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg'>
      <p className='text-[20px] text-white/[0.68]'>3-Years Prediction</p>
      <div>
        <p className='text-[40px] text-white/[0.68] font-bold'>
          {data.Yearly.length >= 3 && data.Yearly[2]['Yearly Low']}
        </p>
      </div>
    </div>
  </div>
  <div className='w-[70%] mx-auto h-[550px] m-10'>
  <AreaChart jdata={jsondata}/>
  </div>
  </div>
):( <div className='flex gap-10 justify-center pt-10'>
  <div>
    <img src={loading} width={200} height={200}/>
    
  </div>
  </div>)}
  
  </div>
  )
}

export default Frecast