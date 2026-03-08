import { useParams } from "react-router-dom"
import { libros } from "../data/books"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import LibroCard from "../components/LibroCard"

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
            <LibroCard key={libro.id} libro={libro} >
              <button onClick={() => addToCart(libro)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Agregar al Carrito
              </button>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Comprar Ahora
              </button>
            </LibroCard>
          ))}
        </div>
    </div>
  )
}

export default Category