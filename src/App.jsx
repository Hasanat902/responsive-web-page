import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
