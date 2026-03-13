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

  const camposCheckout = [
    { id: "nombre", label: "Nombre", type: "text", required: true  },
    { id: "apellido", label: "Apellido", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "direccion", label: "Direccion", type: "text", required: true },
    { id: "pais", label: "Pais", type: "text", required: true },
    { id: "calle", label: "Calle", type: "text", required: true },
    { id: "numeroCalle", label: "Numero de Calle", type: "text", required: true },
    { id: "piso", label: "Piso", type: "text", required: false },
    { id: "departamento", label: "Departamento", type: "text", required: false },
    { id: "localidad", label: "Localidad", type: "text", required: true },
    { id: "provincia", label: "Provincia", type: "text", required: true },
    { id: "codigoPostal", label: "Codigo Postal", type: "text", required: true },
    { id: "telefono", label: "Telefono", type: "text", required: true },
    { id: "tipoDeDocumento", label: "Tipo de Documento", type: "text", required: true },
    { id: "numeroDeDocumento", label: "Numero de Documento", type: "text", required: true },
    { id: "CondicionIva", label: "Condicion IVA", type: "text", required: true },
    { id: "RazonSocial", label: "Razon Social", type: "text", required: true },
    { id: "Email", label: "Email", type: "email", required: true },
    { id: "NotasDelPedido", label: "Notas del Pedido", type: "textarea", required: false },
  ];

  const seccionesCheckout = {
    personales: ["nombre", "apellido", "email", "telefono"],
    direccion: ["direccion", "pais", "calle", "numeroCalle", "piso", "departamento", "localidad", "provincia", "codigoPostal"],
    facturacion: ["tipoDeDocumento", "numeroDeDocumento", "CondicionIva", "RazonSocial", "Email"],
    adicionales: ["NotasDelPedido"]
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setdataCliente({ ...dataCliente, [id]: value });
  };


  return (
    <div className="p-8 text-white flex flex-col">
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
            <div className="w-full">
              {/* Primeros 10 inputs en dos columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-lg">
                {camposCheckout.slice(0, 10).map((campo) => (
                  <div key={campo.id} className="mb-4">
                    <label htmlFor={campo.id} className="block text-sm font-medium mb-1">
                      {campo.label} {campo.required ? <span className="text-red-500">*</span> : <span className="text-gray-400">(Opcional)</span>}
                    </label>
                    <input
                      type={campo.type}
                      id={campo.id}
                      value={dataCliente[campo.id]}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required={campo.required}
                    />
                  </div>
                ))}
              </div>
              {/* El resto en una sola columna */}
              <div className="grid grid-cols-1 gap-4 p-6 rounded-lg">
                {camposCheckout.slice(10).map((campo) => (
                  <div key={campo.id} className="mb-4">
                    <label htmlFor={campo.id} className="block text-sm font-medium mb-1">
                      {campo.label} {campo.required ? <span className="text-red-500">*</span> : <span className="text-gray-400">(Opcional)</span>}
                    </label>
                    <input
                      type={campo.type}
                      id={campo.id}
                      value={dataCliente[campo.id]}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required={campo.required}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mb-6 w-full md:w-1/3">
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
              {console.log(seccionesCheckout.personales.map((campoId) => dataCliente[campoId]))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
