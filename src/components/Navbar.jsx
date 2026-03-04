import { Link } from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
import { useState, useRef, useEffect } from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const Navbar = () => {
  const [abierto, setAbierto] = useState(false)
  const dropdownRef = useRef(null)
  const { cartItems } = useContext(CartContext)

  useEffect(() => {
    const manejarClickFuera = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setAbierto(false)
      }
    }

    document.addEventListener("mousedown", manejarClickFuera)

    return () => {
      document.removeEventListener("mousedown", manejarClickFuera)
    }
  }, [])

  return (
    <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-400">
        Alejandría
      </Link>

      <div className="flex items-center gap-6">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setAbierto(!abierto)}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            Categorías
            <span
              className={`transition-transform duration-300 ${
                abierto ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`absolute top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-lg p-2
              transform transition-all duration-300 origin-top
              ${
                abierto
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
          >
            <ul className="flex flex-col gap-2">
              <Link to="/category/Fantasía" className="hover:bg-gray-600 p-2 rounded cursor-pointer">
                Fantasía
              </Link>
              <Link to="/category/Ciencia Ficción" className="hover:bg-gray-600 p-2 rounded cursor-pointer">
                Ciencia Ficción
              </Link>
              <Link to="/category/Distópico" className="hover:bg-gray-600 p-2 rounded cursor-pointer">
                Distópico
              </Link>
              <Link to="/category/Clásicos" className="hover:bg-gray-600 p-2 rounded cursor-pointer">
                Clásicos
              </Link>
            </ul>
          </div>
        </div>
        <div className="relative">
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full ">{cartItems.length}</span>
          )}
          <Link to="/cart" className="hover:text-blue-400 transition text-xl">
            <GiShoppingCart size={30}/> 
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar