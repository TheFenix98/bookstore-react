const Contacto = () => {
  return (
    <div className="p-8 text-white flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="w-full">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <h2 className="text-2xl font-semibold mb-4">Formulario</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Asunto" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Nombre" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Tu Mensaje" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
            <button type="submit" className="bg-green-500 hover:bg-green-700 items-center text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </form>
        </div>
        <div>
            <h2 className="text-2xl font-semibold mb-4 mt-8">Información de Contacto</h2>
            <h3>Whatsaap:</h3>
            <p className="text-gray-400 mb-2">+54 9 11 1234-5678</p>
            <h3>Email:</h3>
            <p className="text-gray-400 mb-2">contacto@bookstore.com</p>
        </div>
    </div>
  )
}

export default Contacto