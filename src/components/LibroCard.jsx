import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const LibroCard = ({ libro, children }) => {
  return (
    <div className="group relative bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/40">

      {/* Badge */}
      <div className="absolute top-3 left-3 z-10 bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        Bestseller
      </div>

      {/* Imagen */}
      <Link to={`/book/${libro.id}`} className="block">
        <div className="relative w-full h-72 bg-gradient-to-b from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
          
          {/* Glow */}
          <div className="absolute w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            className="relative h-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
            src={libro.imagen}
            alt={libro.titulo}
          />
        </div>
      </Link>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3">

        {/* Rating fake ecommerce */}
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-500" />

          <span className="text-gray-400 ml-2 text-xs">
            (124)
          </span>
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold leading-tight line-clamp-2 min-h-[56px]">
          {libro.titulo}
        </h2>

        {/* Autor */}
        <p className="text-gray-400 text-sm">
          {libro.autor}
        </p>

        {/* Precio */}
        <div className="flex items-end gap-2">
          <p className="text-blue-400 font-bold text-2xl">
            ${libro.precio.toLocaleString()}
          </p>

          <span className="text-green-400 text-sm font-medium mb-1">
            En stock
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700"></div>

        {/* Botones / children */}
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LibroCard