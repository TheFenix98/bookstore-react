import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);

  return (
    <div className="p-4 md:p-8 text-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Carrito de Compras</h1>
        <button onClick={clearCart} className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          <FaTrashAlt className="inline-block mr-2" />
          Vaciar Carrito
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-gray-400">Tu carrito está vacío</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-row sm:flex-row justify-between gap-4 bg-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full sm:w-24 md:w-32 h-40 sm:h-32 md:h-40 object-contain object-left rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.titulo}</h2>
                  <p className="text-gray-400 mt-2">${item.precio.toLocaleString()}</p>
                  <p className="text-gray-400 mt-1">{item.autor}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:items-end">
                <div className="flex flex-col items-center  p-4 rounded-lg">
                  <p className="text-gray-400 mb-2 text-sm">Cantidad</p>
                  <div className="flex items-center bg-gray-700 rounded-lg w-fit overflow-hidden">
                    <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-600 hover:bg-gray-500 transition">
                      -
                    </button>
                    <span className="px-4 py-1 font-semibold">
                      {item.quantity || 1}
                    </span>
                    <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-gray-600 hover:bg-gray-500 transition">
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-400 mb-2 text-sm">Subtotal</p>
                  <p className="text-blue-400 font-bold text-lg">
                    ${(item.precio * (item.quantity || 1)).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                  <FaTrashAlt />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          
          <div className="flex  sm:flex-row  items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl md:text-2xl font-semibold">Total =</h2>
            <p className="text-blue-400 font-bold text-xl md:text-2xl">
              ${cartItems.reduce(
                    (total, item) =>
                      total + item.precio * (item.quantity || 1),
                    0
                  )
                  .toLocaleString()}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Link to="/checkout" className="w-full text-center sm:w-auto px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Finalizar Compra
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
