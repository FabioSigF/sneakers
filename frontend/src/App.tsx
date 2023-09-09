import React, { useEffect } from "react";

//Redux Hooks
import { useAppDispatch } from "./redux/store";
//Redux Actions
import { DeviceTypeSlice } from "./redux/deviceType/slice";


//React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AuthenticationModal from "./components/Modal/Authentication";
import Footer from "./components/Footer";
import QuickViewModal from "./components/Modal/QuickView";
import Cart from "./components/Sidebar/Cart";
import Search from "./pages/Search";
import ToastProvider from "./providers/ToastProvider";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";

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
      <ToastProvider />
      <QuickViewModal />
      <AuthenticationModal />
      <Cart />
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/search" element={<Search />} />
          <Route index path="/products/:id" element={<Product />} />
          <Route index path="/products/" element={<Products />} />
          <Route index path="/wishList" element={<Wishlist />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
