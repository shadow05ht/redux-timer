import React, { useEffect, useState } from 'react';

const Fulltime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{ textAlign: 'center', fontSize: '5rem' }}>
      {time.getHours().toString().padStart(2, '0')} :
      {time.getMinutes().toString().padStart(2, '0')} :
      {time.getSeconds().toString().padStart(2, '0')}
    </h1>
  );
};

export default Fulltime;