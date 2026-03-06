import { useParams } from "react-router-dom"
import { libros } from "../data/books"
import { Link } from "react-router-dom"
import LibroCard  from "../components/LibroCard"


const Busqueda = () => {
    const { query } = useParams()
    const resultados = libros.filter((libro) =>
        libro.titulo.toLowerCase().includes(query.toLowerCase()) ||
        libro.autor.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div>
        <h1 className="text-3xl font-bold p-8 text-white">Resultados de búsqueda para: "{query}"</h1>
        {resultados.length === 0 ? (
            <p className="text-white p-8">No se encontraron libros que coincidan con tu búsqueda.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {resultados.map((libro) => (
                    <LibroCard key={libro.id} libro={libro} >
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Agregar al Carrito
                        </button>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Comprar Ahora
                        </button>
                    </LibroCard>
                ))}
            </div>
        )}
    </div>
  )
}  

export default Busqueda