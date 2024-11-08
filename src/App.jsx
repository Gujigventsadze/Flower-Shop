import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Singleproductpage from "./pages/Singleproductpage";
import Cart from "./pages/Cart";
import Productspage from "./pages/Productspage";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<Singleproductpage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
