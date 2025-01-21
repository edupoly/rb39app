import React, { useState, useEffect } from "react";

const AnimationExample = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer); // Cleanup if the component unmounts
    };
  }, []); // Effect runs once on mount

  return (
    <div>
      <div className={`box ${isVisible ? "visible" : ""}`}></div>
      <style>
        {`
          .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            opacity: 0;
            transition: opacity 0.5s;
          }
          .box.visible {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default AnimationExample;
