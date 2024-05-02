import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="my-2"></Container>
      <Outlet />
    </>
  );
}

export default App;
