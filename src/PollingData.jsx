import React, { useState, useEffect } from "react";

const PollingExample = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <h1>Current Time: {time}</h1>;
};

export default PollingExample;
