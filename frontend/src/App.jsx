import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>MERN Auth</h1>
    </>
  );
}

export default App;
