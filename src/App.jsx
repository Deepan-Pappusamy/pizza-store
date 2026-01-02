import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeLayout from "./pages/HomeLayout";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Custome from "./pages/Custome";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollRestoration from "./components/ScrollRestoration";
import CustomerSupport from "./components/CustomerSupport";

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Navbar />
      <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pizza_customize" element={<Custome />} />
        <Route path="/contact" element={<CustomerSupport />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
