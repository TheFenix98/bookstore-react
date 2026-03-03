import { useParams } from "react-router-dom"
import { libros } from "../data/books"

const BookDetail = () => {
  const { id } = useParams()
  const libro = libros.find((libro) => libro.id === parseInt(id))

  if (!libro) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-3xl font-bold">Libro no encontrado</h1>
      </div>
    )
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold">Detalle del libro</h1>
      <div className="flex mt-6 gap-0 bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="w-1/3 items-center flex flex-col">
          <h2 className="text-2xl font-semibold mt-4">{libro.titulo}</h2>
          <img className="w-1/2 mb-4" src={libro.imagen} alt={libro.titulo} />
          <p className="text-gray-400 text-s">{libro.autor}</p>
          <p className="text-blue-400 font-bold text-xl mt-2">${libro.precio.toLocaleString()}</p>
          <div className="flex flex-col w-1/2 ">
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Comprar Ahora</button>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Agregar al Carrito</button>
          </div>
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-semibold mt-4">Sinopsis</h2>
          <p className="text-gray-400 text-lg">{libro.sinopsis}</p>
          <h2 className="text-2xl font-semibold mt-4">Especificaciones</h2>
      <table className="w-full mx-auto mt-6 rounded-xl   border border-gray-600">
        <tbody>
          <tr className="border border-gray-600">
            <td className="p-3 bg-gray-800 font-semibold">Género</td>
            <td className=" p-3">{libro.categoria}</td>
          </tr>
          <tr className="border border-gray-600">
            <td className="p-3 bg-gray-600 font-semibold">Año</td>
            <td className="bg-gray-600 p-3">{libro.año}</td>
          </tr>
          <tr className="border border-gray-600">
            <td className="p-3 bg-gray-800 font-semibold">Páginas</td>
            <td className="p-3">{libro.paginas}</td>
          </tr>
          <tr className="border border-gray-600">
            <td className="p-3 bg-gray-600 font-semibold">Descripción</td>
            <td className="bg-gray-600 p-3">{libro.descripcion}</td>
          </tr>
          <tr className="border border-gray-600">
            <td className="p-3 bg-gray-800 font-semibold">Editorial</td>
            <td className="p-3">{libro.editorial}</td>
          </tr>
          <tr className="border border-gray-600">
            <td className="p-3 bg-gray-600 font-semibold">ISBN</td>
            <td className="bg-gray-600 p-3">{libro.isbn}</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
      
    </div>
  )
}

export default BookDetail