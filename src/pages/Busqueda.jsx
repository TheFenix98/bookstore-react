import { useParams } from "react-router-dom"
import { libros } from "../data/books"
import Fuse from "fuse.js"
import LibroCard  from "../components/LibroCard"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const Busqueda = () => {
    const { query } = useParams()
    const { addToCart } = useContext(CartContext)

    const fuse = new Fuse(libros, {
        keys: ["titulo", "autor"],
        threshold: 0.4,
    })

    const resultados = fuse.search(query)
    const librosEncontrados = resultados.map((resultado) => resultado.item)
    const sugerencia = resultados.length > 0 ? resultados [0].item.titulo : null


  return (
    <div className="p-4 md:p-8 text-white min-h-screen">
        {query && sugerencia && query.toLowerCase() !== sugerencia.toLowerCase() && (
  <p className="text-gray-400 mb-4">
    Resultados para "<strong>{query}</strong>".
    Mostrando resultados para{" "}
    <span className="font-bold text-white">{sugerencia}</span>
  </p>
)}
        {librosEncontrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {librosEncontrados.map((libro) => (
                    <LibroCard key={libro.id} libro={libro} addToCart={addToCart} />
                ))}
            </div>
        ) : (
            <div className="flex flex-col  w-2/4 justify-center gap-4  rounded-lg "> 
                <h6 className="text-gray-400">No pudimos encontrar libros para "<strong>{query}</strong>". Lo sentimos.</h6>
                <p className="text-gray-400">Intenta con otro término de búsqueda o contacta con nosotros <a href="/contacto" className="text-blue-500 underline">aquí</a>.</p>
            </div>

            

        )}
    </div>
)}

export default Busqueda