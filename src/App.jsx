import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
