import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ProductDetail from "./pages/productDetail";
import Products from "./pages/Products";
import Header from "./pages/Header";
import ProductDetail from "./pages/productDetail";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/products" element={<Products />} />
        {/* <Route path="/Header" element={<Header />} /> */}
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    

  )
}
export default App
