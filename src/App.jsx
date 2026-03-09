import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookDetail from "./pages/BooksDetail"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Category from "./pages/Category"
import Busqueda from "./pages/Busqueda"
import { CartProvider } from "./context/CartContext"
import { Toaster } from "sonner"
import ScrollTop from "./components/ScrollTop"




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Toaster position="bottom-right" richColors  duration={3000}/>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/busqueda/:query" element={<Busqueda />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ScrollTop />
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App