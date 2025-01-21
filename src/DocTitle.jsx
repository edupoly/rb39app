import React, { useState, useEffect } from "react";

const UpdateTitleExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Dependency array: Runs effect whenever `count` changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <hr />
      <b>Check the site title on the tab</b>
    </div>
  );
};

export default UpdateTitleExample;
