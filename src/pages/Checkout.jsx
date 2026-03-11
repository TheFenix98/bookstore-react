import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const dataCliente = {
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    pais: "",
    calle: "",
    numeroCalle: "",
    piso: "",
    departamento: "",
    localidad: "",
    provincia: "",
    codigoPostal: "",
    telefono: "",
    tipoDeDocumento: "",
    numeroDeDocumento: "",
    CondicionIva: "",
    RazonSocial: "",
    Email: "",
    NotasDelPedido: "",
  };

  return (
    <div className="p-8 text-white flex flex-col   ">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <h2 className="text-2xl font-semibold mb-4">Envio y Facturacion</h2>
      <p className="text-lg mb-4">
        Revisa tu compra antes de proceder al pago.
      </p>
      <div>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Tu carrito está vacío.</p>
        ) : (
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-2/3 p-6 rounded-lg">
              <form action="submit" className="mb-6">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    value={dataCliente.nombre}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="apellido">Apellido</label>
                  <input
                    type="text"
                    id="apellido"
                    value={dataCliente.apellido}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={dataCliente.email}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="direccion">Dirección</label>
                  <input
                    type="text"
                    id="direccion"
                    value={dataCliente.direccion}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="pais">País</label>
                  <input
                    type="text"
                    id="pais"
                    value={dataCliente.pais}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="calle">Calle</label>
                  <input
                    type="text"
                    id="calle"
                    value={dataCliente.calle}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="numeroCalle">Número de Calle</label>
                  <input
                    type="text"
                    id="numeroCalle"
                    value={dataCliente.numeroCalle}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="piso">Piso</label>
                  <input
                    type="text"
                    id="piso"
                    value={dataCliente.piso}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="departamento">Departamento</label>
                  <input
                    type="text"
                    id="departamento"
                    value={dataCliente.departamento}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="localidad">Localidad</label>
                  <input
                    type="text"
                    id="localidad"
                    value={dataCliente.localidad}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="provincia">Provincia</label>
                  <input
                    type="text"
                    id="provincia"
                    value={dataCliente.provincia}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="codigoPostal">Código Postal</label>
                  <input
                    type="text"
                    id="codigoPostal"
                    value={dataCliente.codigoPostal}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="text"
                    id="telefono"
                    value={dataCliente.telefono}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="tipoDeDocumento">Tipo de Documento</label>
                  <input
                    type="text"
                    id="tipoDeDocumento"
                    value={dataCliente.tipoDeDocumento}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="numeroDeDocumento">Número de Documento</label>
                  <input
                    type="text"
                    id="numeroDeDocumento"
                    value={dataCliente.numeroDeDocumento}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="CondicionIva">Condición IVA</label>
                  <input
                    type="text"
                    id="CondicionIva"
                    value={dataCliente.CondicionIva}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="RazonSocial">Razón Social</label>
                  <input
                    type="text"
                    id="RazonSocial"
                    value={dataCliente.RazonSocial}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    id="Email"
                    value={dataCliente.Email}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
                <div>
                  <label htmlFor="NotasDelPedido">Notas del Pedido</label>
                  <textarea
                    id="NotasDelPedido"
                    value={dataCliente.NotasDelPedido}
                    className="w-full p-2 mb-4 bg-gray-700 rounded ml-2"
                  />
                </div>
              </form>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mb-6  w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">PAGO</h2>
            <h3 className="text-xl font-semibold mb-4">Productos</h3>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div className="flex-1 mx-4 text-left">
                    <h2 className="text-xl font-semibold">{item.titulo}</h2>
                    <p className="text-gray-400">Cantidad: {item.quantity}</p>
                  </div>
                  <div>
                    <p>Subtotal</p>
                    <p className="text-blue-400 font-bold">
                      ${(item.precio * (item.quantity || 1)).toLocaleString()}
                    </p>
                  </div>
                </div>
                
              ))}
              <button className="bg-green-500 hover:bg-green-700 items-center text-white font-bold py-2 px-4 rounded">
                Ir a pagar
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Checkout;
