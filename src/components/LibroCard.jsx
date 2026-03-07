import { Link } from "react-router-dom"

const LibroCard = ({ libro, children }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition transform duration-300 hover:scale-105">

      <h2 className="text-2xl font-semibold mt-4 mb-4 text-center">
        {libro.titulo}
      </h2>

      <Link to={`/book/${libro.id}`} className="w-full">
        <div className="w-full h-64 flex items-center justify-center mb-4 overflow-hidden ">
          <img
            className="h-full object-contain transition-transform duration-300 hover:scale-[1.1]"
            src={libro.imagen}
            alt={libro.titulo}
          />
        </div>
      </Link>

      <p className="text-gray-400 text-sm">{libro.autor}</p>

      <p className="text-blue-400 font-bold text-xl mt-2">
        ${libro.precio.toLocaleString()}
      </p>

      {children}

    </div>
  )
}

export default LibroCard