import { useParams } from "react-router-dom"
import { libros } from "../data/books"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Category = () => {
  const { id } = useParams()
  const librosCategoria = libros.filter((libro) => libro.categoria === id)
  const { addToCart } = useContext(CartContext)

  if (librosCategoria.length === 0) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-3xl font-bold">No se encontraron libros en esta categoría</h1>
      </div>
    )
  }

  return (
    <div>
        <h1 className="text-3xl font-bold p-8 text-white">Nuestros libros en la categoría: {id}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {librosCategoria.map((libro) => (
            <div key={libro.id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-2xl font-semibold mt-4">{libro.titulo}</h2>
              <Link to={`/book/${libro.id}`}>
                <img className="w-2/2 mb-4" src={libro.imagen} alt={libro.titulo} />
              </Link>
              <p className="text-gray-400 text-s">{libro.autor}</p>
              <p className="text-blue-400 font-bold text-xl mt-2">${libro.precio.toLocaleString()}</p>
              <div className="flex flex-col w-1/2 ">
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Comprar Ahora</button>
                <button onClick={() => addToCart(libro)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Agregar al Carrito</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Category