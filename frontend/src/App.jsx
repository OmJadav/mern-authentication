import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Container className="my-2"></Container>
      <Outlet />
    </>
  );
}

export default App;
