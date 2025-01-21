import React, { useState, useEffect } from "react";

const WindowResizeExample = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array: Runs effect once on mount

  return <h1>Window Width: {windowWidth}px</h1>;
};

export default WindowResizeExample;
