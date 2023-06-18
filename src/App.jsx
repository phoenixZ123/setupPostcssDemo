import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="m-auto">
          <h1 className="text-red-500">{count} counting</h1>
          <button onClick={() => setCount(count + 1)}>Plus +</button>
        </div>
      </div>
    </>
  );
}

export default App;
