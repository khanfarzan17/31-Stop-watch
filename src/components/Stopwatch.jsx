import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };
  const handleStop = () => {
    setRunning(false);
    console.log(`${running} Button clicked `);
  };
  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="watch-container ">
      <h1 className="time-display"> Time:{time} secs</h1>

      <div className="btn-container">
        <button onClick={handleStart} className="start-btn">
          {" "}
          Start
        </button>
        <button onClick={handleStop} className="stop-btn">
          {" "}
          Stop
        </button>
        <button onClick={handleReset} className="reset-btn">
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
