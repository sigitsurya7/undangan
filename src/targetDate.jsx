import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className='flex justify-center items-center gap-4'>
        <div className='w-20 h-20 rounded-md bg-secondary text-center flex justify-center items-center'>
            <h1>
              <span className='font-semibold'>Hari</span>
              <br />
              {timeLeft.days > 0 && <span>{timeLeft.days} </span>}
            </h1>
          </div>
          <div className='w-20 h-20 rounded-md bg-secondary text-center flex justify-center items-center'>
            <h1>
              <span className='font-semibold'>Jam</span>
              <br />
              <span>{addLeadingZero(timeLeft.hours)}</span>
            </h1>
          </div>
          <div className='w-20 h-20 rounded-md bg-secondary text-center flex justify-center items-center'>
            <h1>
              <span className='font-semibold'>Menit</span>
              <br />
              <span>{addLeadingZero(timeLeft.minutes)}</span>
            </h1>
          </div>
          <div className='w-20 h-20 rounded-md bg-secondary text-center flex justify-center items-center'>
            <h1>
              <span className='font-semibold'>Detik</span>
              <br />
              <span>{addLeadingZero(timeLeft.seconds)}</span>
            </h1>
          </div>
    </div>
  );
};

export default CountdownTimer;
