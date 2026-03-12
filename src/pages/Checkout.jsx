import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [dataCliente, setdataCliente] = useState({
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
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setdataCliente({
      ...dataCliente,
      [id]: value,
    });
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre">Nombre/s *</label>
                    <input
                      type="text"
                      id="nombre"
                      value={dataCliente.nombre}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="apellido">Apellido/s *</label>
                    <input
                      type="text"
                      id="apellido"
                      value={dataCliente.apellido}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="calle">Calle *</label>
                    <input
                      type="text"
                      id="calle"
                      value={dataCliente.calle}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="altura">Altura *</label>
                    <input
                      type="text"
                      id="altura"
                      value={dataCliente.altura}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="direccion">Dirección * </label>
                    <input
                      type="text"
                      id="direccion"
                      value={dataCliente.direccion}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="pais">País *</label>
                    <input
                      type="text"
                      id="pais"
                      value={dataCliente.pais}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="provincia">Provincia *</label>
                    <input
                      type="text"
                      id="provincia"
                      value={dataCliente.provincia}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="calle">Calle *</label>
                    <input
                      type="text"
                      id="calle"
                      value={dataCliente.calle}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="numeroCalle">Número de Calle *</label>
                    <input
                      type="text"
                      id="numeroCalle"
                      value={dataCliente.numeroCalle}
                      required
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="piso">Piso</label>
                    <input
                      type="text"
                      id="piso"
                      value={dataCliente.piso}
                      className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="departamento">Departamento</label>
                  <input
                    type="text"
                    id="departamento"
                    value={dataCliente.departamento}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="localidad">Localidad</label>
                  <input
                    type="text"
                    id="localidad"
                    value={dataCliente.localidad}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="codigoPostal">Código Postal</label>
                  <input
                    type="text"
                    id="codigoPostal"
                    value={dataCliente.codigoPostal}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="text"
                    id="telefono"
                    value={dataCliente.telefono}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="tipoDeDocumento">Tipo de Documento</label>
                  <select
                    id="tipoDeDocumento"
                    value={dataCliente.tipoDeDocumento}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  >
                    <option value="DNI">DNI</option>
                    <option value="CUIL">CUIL</option>
                    <option value="CUIT">CUIT</option>
                    <option value="CI">CI</option>
                    <option value="LE">LE</option>
                    <option value="LC">LC</option>
                    <option value="Pasaporte/Otro">Pasaporte/Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="numeroDeDocumento">Número de Documento</label>
                  <input
                    type="number"
                    id="numeroDeDocumento"
                    placeholder="Ingrese solo numeros"
                    value={dataCliente.numeroDeDocumento}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="CondicionIva">Condición IVA</label>
                  <input
                    type="text"
                    id="CondicionIva"
                    value={dataCliente.CondicionIva}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="RazonSocial">Razón Social</label>
                  <input
                    type="text"
                    id="RazonSocial"
                    value={dataCliente.RazonSocial}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="NotasDelPedido">Notas del Pedido</label>
                  <textarea
                    id="NotasDelPedido"
                    value={dataCliente.NotasDelPedido}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={dataCliente.email}
                    className="w-full p-2 mb-4 bg-gray-700 rounded-xl ml-2"
                    onChange={handleChange}
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
              {console.log(dataCliente)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
