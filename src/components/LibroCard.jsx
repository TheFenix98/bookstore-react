import { Link } from "react-router-dom"

const LibroCard = ({ libro }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition">
      <Link to={`/book/${libro.id}`}>
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="w-full h-64 object-cover rounded-lg"
        />
      </Link>

      <h3 className="text-lg font-semibold mt-4">
        {libro.titulo}
      </h3>

      <p className="text-gray-400 text-sm">
        {libro.autor}
      </p>

      <p className="text-blue-400 font-bold text-xl mt-2">
        ${libro.precio.toLocaleString()}
      </p>

      
    </div>
  )
}

export default LibroCard