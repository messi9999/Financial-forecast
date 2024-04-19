import React, { useState, useEffect } from "react";
import AreaChart from "./AreaChart";
import logo from "./../src/logo/logo.png";
import loading from "../assets/loading.webp";
import ProgressBar from "@ramonak/react-progress-bar";
const Frecast = () => {
  const [data, setData] = useState();
  const [isLoad, setIsLoad] = useState(false);
  const [step, setStep] = useState(0);
  const [percent, setPercent] = useState(0);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const totalDuration = Math.floor(Math.random() * (15000 - 13000 + 1) + 13000);
  const updateInterval = totalDuration / 100; // Time per 1% increment
  const stepDescirption = [
    "Loading News...",
    "Sentiment analysis...",
    "Impact analysis...",
    "Integrate technical analysis...",
    "Forecast...",
    "complete!",
  ];
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress > 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, updateInterval);
    if (percent == 10) setStep(1);
    else if (percent == 35) setStep(2);
    else if (percent == 65) setStep(3);
    else if (percent == 75) setStep(4);
    else if (percent == 99) setStep(5);
    else if (percent == 100) setStep(6);
    return () => clearInterval(timer);
  }, [updateInterval]);

  const init = () => {
    // const dates = jsondata.Daily.map(entry => entry.Date);
    // const dailyHighs = jsondata.Daily.map(entry => entry["Daily High"]);
    // const dailyLows = jsondata.Daily.map(entry => entry["Daily Low"]);
    // const dailyHighsNumbers = dailyHighs.map(high => parseFloat(high.replace('¥', '')));
    // const dailyLowsNumbers = dailyLows.map(high => parseFloat(high.replace('¥', '')));

    fetch(apiUrl + "/news/forecast")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        // Assuming 'data' has a similar structure to 'jsondata'
        console.log(data);
        setData(data);
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  };

  return (
    <div>
      <div>
        {/* <p className="mx-auto max-w-5xl pt-10 text-[#FFFFFF]/[.88] text-[25px]">
          Explore short-term USD to JPY forecast for today, tomorrow, this week,
          and next week as well as long-term US Dollar vs Japanese Yen
          prediction for 2024, 2025 to 2030 and beyond
        </p> */}
      </div>
      {step == 6 ? (
        <div>
          {/* <div className="flex gap-10 justify-center pt-10">
            <div className="py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg">
              <p className="text-[20px] text-white/[0.68]">5-Days Prediction</p>
              <div>
                <p className="text-[40px] text-white/[0.68] font-bold">
                  {data.Daily.length >= 6 && data.Daily[5]["Daily High"]}
                </p>
              </div>
            </div>
            <div className="py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg">
              <p className="text-[20px] text-white/[0.68]">1-week Prediction</p>
              <div>
                <p className="text-[40px] text-white/[0.68] font-bold">
                  {data.Daily.length >= 8 && data.Daily[7]["Daily High"]}
                </p>
              </div>
            </div>
            <div className="py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg">
              <p className="text-[20px] text-white/[0.68]">
                1-Month Prediction
              </p>
              <div>
                <p className="text-[40px] text-white/[0.68] font-bold">
                  {data.Daily.length > 0 &&
                    data.Daily[data.Daily.length - 1]["Daily High"]}
                </p>
              </div>
            </div>
            <div className="py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg">
              <p className="text-[20px] text-white/[0.68]">1-Year Prediction</p>
              <div>
                <p className="text-[40px] text-white/[0.68] font-bold">
                  {data.Yearly.length > 0 && data.Yearly[0]["Yearly Low"]}
                </p>
              </div>
            </div>
            <div className="py-2 px-6 border border-[#FFFFFF]/[0.16] rounded-lg">
              <p className="text-[20px] text-white/[0.68]">
                3-Years Prediction
              </p>
              <div>
                <p className="text-[40px] text-white/[0.68] font-bold">
                  {data.Yearly.length >= 3 && data.Yearly[2]["Yearly Low"]}
                </p>
              </div>
            </div>
          </div> */}
          <div className="w-[70%] mx-auto h-[550px] m-10">
            <AreaChart jdata={data} />
          </div>
        </div>
      ) : (
        <div className="w-[700px] h-[300px] bg-[#0f172a] mx-auto mt-20 rounded-xl border-2 border-gray-400 drop-shadow-2xl flex flex-col">
          {/* <ProgressBar completed={60} />; */}
          <div className="bg-[#223462] rounded-t-xl">
            <p className="py-2 px-5 text-white text-[20px]">
              Progress Forecast
            </p>
          </div>
          <div className="w-full h-full ">
            {/* <div className="w-[80%] mx-auto pt-20">
              <ProgressBar completed={percent} />;
            </div> */}
            <div style={{ width: "50%", margin: "50px auto" }}>
              <ProgressBar
                completed={percent}
                transitionDuration={`${updateInterval}ms`}
              />
            </div>
            <p className="text-[30px] pt-10 px-5 italic font-bold text-[#cfcf47]">
              {stepDescirption[step]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Frecast;
