import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, startTimer, stopTimer, tickTimer, recordTime } from '../redux/timerSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const { timeLeft, history, running } = useSelector((state) => state.timer);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTime = (t) => {
    const hrs = Math.floor(t / 3600);
    const mins = Math.floor((t % 3600) / 60);
    const secs = t % 60;
    return `${hrs} saat ${mins} dəqiqə ${secs} saniyə`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tickTimer());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (timeLeft === 0 && running) {
      alert('Vaxt bitdi');
      dispatch(stopTimer());
    }
  }, [timeLeft, running, dispatch]);

  const handleStart = () => {
    const total = hours * 3600 + minutes * 60 + seconds;
    dispatch(setTimer(total));
    dispatch(startTimer());
  };

  // + və – funksiyaları
  const increase = (type) => {
    if (type === 'hour') setHours(prev => prev + 1);
    if (type === 'min') setMinutes(prev => prev + 1);
    if (type === 'sec') setSeconds(prev => prev + 1);
  };

  const decrease = (type) => {
    if (type === 'hour') setHours(prev => Math.max(0, prev - 1));
    if (type === 'min') setMinutes(prev => Math.max(0, prev - 1));
    if (type === 'sec') setSeconds(prev => Math.max(0, prev - 1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label>Saat</label>
          <input
            type="number"
            min="0"
            value={hours === 0 ? '' : hours}
            onChange={(e) => setHours(Math.max(0, +e.target.value || 0))}
          />
          <button onClick={() => increase('hour')}>+</button>
          <button onClick={() => decrease('hour')}>–</button>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label>Dəqiqə</label>
          <input
            type="number"
            min="0"
            value={minutes === 0 ? '' : minutes}
            onChange={(e) => setMinutes(Math.max(0, +e.target.value || 0))}
          />
          <button onClick={() => increase('min')}>+</button>
          <button onClick={() => decrease('min')}>–</button>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label>Saniyə</label>
          <input
            type="number"
            min="0"
            value={seconds === 0 ? '' : seconds}
            onChange={(e) => setSeconds(Math.max(0, +e.target.value || 0))}
          />
          <button onClick={() => increase('sec')}>+</button>
          <button onClick={() => decrease('sec')}>–</button>
        </div>
      </div>

      <button onClick={handleStart}>START</button>
      <button onClick={() => dispatch(recordTime())}>▲ Button</button>

      {timeLeft > 0 && <h1>{formatTime(timeLeft)}</h1>}

      <h3>Keçmiş ölçmələr</h3>
      <ul>
        {history.map((h, i) => (
          <li key={i}>{formatTime(h)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
