import React from "react";

import PollingExample from "./PollingData";




function App() {
  return (
    <div className="text-center">
      <h2>Performance with React.memo HOC</h2>
      <div className="d-flex justify-content-center">
        <PollingExample></PollingExample>
      </div>
      <h1 className="position-fixed bottom-0 start-0 text-center w-100">ReactJS Training in Hyderabad</h1>
    </div>
  );
}

export default App;
