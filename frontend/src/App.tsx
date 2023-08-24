import React, { useEffect } from "react";
import { DeviceTypeSlice, setDeviceType } from "./redux/deviceType/slice";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/store";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ModalFade from "./components/Modal/ModalFade";
type Props = {};

const App = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () =>
      dispatch(
        DeviceTypeSlice.actions.setDeviceType({ screenSize: window.innerWidth })
      );
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <ModalFade />
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
