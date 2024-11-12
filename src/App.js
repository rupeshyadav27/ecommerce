import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Navbar from "./components/navbar";
import "./components/navbar.css";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";

function App() {
  return (  
    <div className="App">  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}





export default App;
