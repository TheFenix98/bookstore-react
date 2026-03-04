import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookDetail from "./pages/BooksDetail"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Category from "./pages/Category"
import { CartProvider } from "./context/CartContext"


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App