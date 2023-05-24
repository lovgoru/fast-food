import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const title = "Fast Food";
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <h1>{title}</h1>
          <Navbar />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
