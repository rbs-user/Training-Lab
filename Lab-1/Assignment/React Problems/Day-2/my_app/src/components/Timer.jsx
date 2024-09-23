import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
    const [time, setTime] = useState(start);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timerId);
    }, []);
  
    return <p className="text-xl text-center">Time remaining: {time}</p>;
  };
  

export default Timer;
