import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProduto from "./pages/admProduto/AdmProduto";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/detalheproduto" element={<DetProduto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admProdutos" element={<AdmProduto />} />
        <Route path="*" element={<img className="container-notfound" src="https://cdn.dribbble.com/userupload/41802618/file/original-30bd81eb7c805503b995ab442f08b739.gif" alt="Imagem de não encontrado" />} />
      </Routes>
      <Footer />
    </>
  )
}