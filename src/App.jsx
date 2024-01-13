import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Wrapper from "./compoenents/Wrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Wrapper>
        <h1 className=" text-red-600 ">Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Wrapper>
    </>
  );
}

export default App;
