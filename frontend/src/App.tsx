import React, { useEffect } from "react";
import { DeviceTypeSlice, setDeviceType } from "./redux/deviceType/slice";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/store";
import Home from "./pages/Home";
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
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
