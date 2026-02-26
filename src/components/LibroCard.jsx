const LibroCard = ({ libro }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition">
      <img
        src={libro.imagen}
        alt={libro.titulo}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h3 className="text-lg font-semibold mt-4">
        {libro.titulo}
      </h3>

      <p className="text-gray-400 text-sm">
        {libro.autor}
      </p>

      <p className="text-blue-400 font-bold mt-2">
        ${libro.precio}
      </p>

      <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition">
        Agregar al carrito
      </button>
    </div>
  )
}

export default LibroCard