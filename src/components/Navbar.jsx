import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { libros } from "../data/books";

const Navbar = () => {
  const [dropdownDesktop, setDropdownDesktop] = useState(false);
  const [dropdownMobile, setDropdownMobile] = useState(false);
  const dropdownRef = useRef(null);
  const { cartItems } = useContext(CartContext);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const manejarClickFuera = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownDesktop(false);
      }
    };

    document.addEventListener("mousedown", manejarClickFuera);

    return () => {
      document.removeEventListener("mousedown", manejarClickFuera);
    };
  }, []);

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="w-full bg-gray-800 px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl md:text-2xl font-bold text-blue-400">
        Alejandría
      </Link>

      <div className="flex items-center  mx-4 md:max-w-md">
        <form
          className="relative flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/busqueda/${busqueda}`);
            setMostrarResultados(false);
          }}
        >
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white text-sm"
            value={busqueda}
            onChange={(e) => {
              const valor = e.target.value;
              if (valor.trim() === "") {
                setMostrarResultados(false);
                setResultadosBusqueda([]);
                setBusqueda("");
                return;
              }
              setBusqueda(valor);

              const filtrados = libros.filter((libro) =>
                libro.titulo.toLowerCase().includes(valor.toLowerCase()),
              );
              setResultadosBusqueda(filtrados);
              setMostrarResultados(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setMostrarResultados(false);}, 150);
            }}
          />
          {mostrarResultados && resultadosBusqueda.length > 0 && (
            <div className=" absolute top-full left-0 right-0 bg-gray-700 rounded-lg shadow-lg mt-1 z-10">
              {resultadosBusqueda.map((libro) => (
                <div
                  key={libro.id}
                  className="p-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    navigate(`/book/${libro.id}`);
                    setMostrarResultados(false);
                  }}
                >
                  <div className="flex items-center gap-2 justify-between p-2 hover:bg-gray-600 rounded transition">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <img
                        src={libro.imagen}
                        alt={libro.titulo}
                        className="w-8 h-12 object-cover rounded-sm"
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">
                          {libro.titulo}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {libro.autor}
                        </p>
                      </div>
                    </div>

                    <h6 className="text-sm text-blue-400 shrink-0">
                      ${libro.precio.toLocaleString()}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            type="submit"
            className="hidden md:block ml-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600  items-center gap-2"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {/* Categories Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownDesktop(!dropdownDesktop)}
            className="flex items-center gap-2 hover:text-blue-400 transition text-sm"
          >
            Categorías
            <span
              className={`transition-transform duration-300 ${dropdownDesktop ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </button>

          <div
            className={`absolute top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-lg p-2
            transform transition-all duration-300 origin-top
            ${dropdownDesktop ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <ul className="flex flex-col gap-2">
              <Link
                to="/category/Fantasía"
                className="hover:bg-gray-600 p-2 rounded cursor-pointer text-sm"
              >
                Fantasía
              </Link>
              <Link
                to="/category/Ciencia Ficción"
                className="hover:bg-gray-600 p-2 rounded cursor-pointer text-sm"
              >
                Ciencia Ficción
              </Link>
              <Link
                to="/category/Distópico"
                className="hover:bg-gray-600 p-2 rounded cursor-pointer text-sm"
              >
                Distópico
              </Link>
              <Link
                to="/category/Clásicos"
                className="hover:bg-gray-600 p-2 rounded cursor-pointer text-sm"
              >
                Clásicos
              </Link>
            </ul>
          </div>
        </div>

        {/* Cart */}
        <div className="relative">
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
          <Link to="/cart" className="hover:text-blue-400 transition">
            <GiShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <div className="relative">
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
          <Link to="/cart" className="hover:text-blue-400 transition">
            <GiShoppingCart size={24} />
          </Link>
        </div>
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex flex-col justify-center items-center w-8 h-8 gap-1 group"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 
            ${menuAbierto ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 
            ${menuAbierto ? "opacity-0" : ""}`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 
            ${menuAbierto ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-gray-800 md:hidden border-t border-gray-700
          transform transition-all duration-300 ease-out
          ${menuAbierto ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Mobile Categories */}
          <div>
            <button
              onClick={() => setDropdownMobile(!dropdownMobile)}
              className="w-full text-left flex items-center justify-between hover:text-blue-400 font-medium py-2"
            >
              Categorías
              <span
                className={`transition-transform ${dropdownMobile ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {dropdownMobile && (
              <ul className="pl-4 space-y-2">
                <Link
                  to="/category/Fantasía"
                  className="block hover:text-blue-400 py-2 text-sm"
                  onClick={() => setMenuAbierto(false)}
                >
                  Fantasía
                </Link>
                <Link
                  to="/category/Ciencia Ficción"
                  className="block hover:text-blue-400 py-2 text-sm"
                  onClick={() => setMenuAbierto(false)}
                >
                  Ciencia Ficción
                </Link>
                <Link
                  to="/category/Distópico"
                  className="block hover:text-blue-400 py-2 text-sm"
                  onClick={() => setMenuAbierto(false)}
                >
                  Distópico
                </Link>
                <Link
                  to="/category/Clásicos"
                  className="block hover:text-blue-400 py-2 text-sm"
                  onClick={() => setMenuAbierto(false)}
                >
                  Clásicos
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
