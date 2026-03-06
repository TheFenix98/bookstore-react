import { Link } from "react-router-dom"

const LibroCard = ({ libro, children }) => {
  return (
   <div key={libro.id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-2xl font-semibold mt-4 mb-4">{libro.titulo}</h2>
              <Link to={`/book/${libro.id}`}>
                <img className="w-2/2 mb-4" src={libro.imagen} alt={libro.titulo} />
              </Link>
              <p className="text-gray-400 text-s">{libro.autor}</p>
              <p className="text-blue-400 font-bold text-xl mt-2">${libro.precio.toLocaleString()}</p>
              {children}
            </div>
  )
}

export default LibroCard