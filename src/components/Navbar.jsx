import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)
  const dropdownRef = useRef(null)

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
    <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center relative">
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

        <Link to="/cart" className="hover:text-blue-400 transition">
          Carrito
        </Link>
      </div>
    </nav>
  )
}

export default Navbar