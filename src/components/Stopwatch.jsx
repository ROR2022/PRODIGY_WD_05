import { useState, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [lapTimes, setLapTimes] = useState([]);
  const timerRef = useRef(null);

  const start = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    lap();
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    setLapTimes([]);
  };

  const lap = () => {
    setLapTimes(prevLapTimes => [...prevLapTimes, time]);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="d-flex flex-column justify-conten-center align-items-center my-5">
      <h1>Stopwatch</h1>
      <div className="display-3">{formatTime(time)}</div>
      <div className="btn-group mt-3">
        {!isRunning ? (
          <button className="btn btn-primary" onClick={start}>
            Start
          </button>
        ) : (
          <button className="btn btn-danger" onClick={pause}>
            Pause
          </button>
        )}
        <button className="btn btn-secondary ms-1" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-info ms-1" onClick={lap} disabled={!isRunning}>
          Lap
        </button>
      </div>
      <div className="mt-3">
        <h2>Lap Times</h2>
        <ul className="list-group">
          {lapTimes.map((lapTime, index) => (
            <li key={index} className="list-group-item">
              Lap {index + 1}: {formatTime(lapTime)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Stopwatch;
