import React, { useEffect } from "react";
import { DeviceTypeSlice } from "./redux/deviceType/slice";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/store";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AuthenticationModal from "./components/Modal/AuthenticationModal";
import Footer from "./components/Footer";
import QuickViewModal from "./components/Modal/QuickViewModal";

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
      <QuickViewModal />
      <AuthenticationModal />
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/products/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
