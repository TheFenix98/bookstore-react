import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    < div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-gray-400">Tu carrito está vacío</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.titulo}</h2>
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-32 h-50 object-cover"
                />
                <p className="text-gray-400">${item.precio.toLocaleString()}</p>
              </div>

              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="text-gray-400 mb-2">Cantidad</p>

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
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 flex items-center gap-2 px-3 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                <FaTrashAlt />
                Eliminar
              </button>
              <div className="flex flex-col items-center mt-4">
                <p className="text-gray-400 mb-2">Subtotal</p>
                <p className="text-blue-400 font-bold text-xl">
                  ${(item.precio * (item.quantity || 1)).toLocaleString()}
                </p>
              </div>
              <div>
              </div>
              
              </div>
              
              </div>
               
          ))}
            <div className="flex justify-between  items-center bg-gray-800 p-4 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold">Total =</h2>
            <p className="text-blue-400 font-bold text-2xl ">
              ${cartItems.reduce((total, item) => total + item.precio * (item.quantity || 1), 0).toLocaleString()}
            </p>
          </div>
          <div className="flex justify-center mt-6">
          <button className="mt-6 px-6 py-3  bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Finalizar Compra
          </button>      
          </div>
        </div>
      )}
    </div>
    
  );
};
export default Cart;
