import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start, pause, reset, tick, addLap } from '../redux/stopwatchSlice';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { time, laps, running } = useSelector((state) => state.stopwatch);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const formatTime = (t) => {
    const hrs = Math.floor(t / 3600);
    const mins = Math.floor((t % 3600) / 60);
    const secs = t % 60;
    return `${hrs} saat ${mins} dəqiqə ${secs} saniyə`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>{formatTime(time)}</h1>

      <button onClick={() => dispatch(start())}>Start</button>
      <button onClick={() => dispatch(pause())}>Pause</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(addLap())}>◉ Button</button>

      <h3>Dövrələr</h3>

      <div
        style={{
          maxHeight: '200px',
          overflowY: 'auto',
          margin: '0 auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          width: '90%',
          maxWidth: '400px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {laps.map((lap, i) => (
            <li
              key={i}
              style={{
                padding: '8px',
                marginBottom: '6px',
                backgroundColor: '#eee',
                borderRadius: '6px',
              }}
            >
              {formatTime(lap)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
