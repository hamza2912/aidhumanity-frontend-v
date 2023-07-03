import React, { useState, useEffect } from 'react';

export const ZakatCountDown = () => {
  const currentDate = new Date();
  const oneYearFromNow = new Date(currentDate);
  oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);

  const [countdownDate, setCountdownDate] = useState(oneYearFromNow.getTime());

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setNewTime();
    }, 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const { days, hours, minutes, seconds } = state;

  const handleReset = () => {
    const currentDate = new Date();
    const oneYearFromNow = new Date(currentDate);
    oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
    setCountdownDate(oneYearFromNow.getTime());
  };
  return (
    <div className="bg-orange2 col-span-2 rounded-xl p-6 z-10">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold">Zakat</h1>
        <div className="h-10 border-l-2 border-black"></div>
        <img
          className="w-4"
          src="images/icons/dashboard/icon_stopwatch.svg"
          alt=""
        />
        <div className="flex gap-1">
          <div className="flex flex-col items-center font-semibold">
            <p className="text-xl">{days}</p>
            <p className="text-vs">Days</p>
          </div>
          <p>:</p>
          <div className="flex flex-col items-center font-semibold">
            <p className="text-xl">{hours}</p>
            <p className="text-vs">Hours</p>
          </div>
          <p>:</p>
          <div className="flex flex-col items-center font-semibold">
            <p className="text-xl">{minutes}</p>
            <p className="text-vs">Minutes</p>
          </div>
          <p>:</p>

          <div className="flex flex-col items-center font-semibold">
            <p className="text-xl">{seconds}</p>
            <p className="text-vs">Seconds</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-4">
        <h1 className="text-2xl font-semibold">£240</h1>
        <button
          className="py-2 px-5 bg-black hover:bg-dblue text-white font-semibold text-sm rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
