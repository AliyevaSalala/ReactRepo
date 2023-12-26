import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AboutPage from "./pages/about-page";
import HomePage from "./pages/home-page";
import NotFound from "./pages/not-found";
import ProductsDetails from "./pages/products-details";
import Products from "./pages/products-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
