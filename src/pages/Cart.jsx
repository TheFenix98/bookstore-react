import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";


const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Tu carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.titulo}</h2>
                <img src={item.imagen} alt={item.titulo} className="w-32 h-50 object-cover" />
                <p className="text-gray-400">${item.precio.toLocaleString()}</p>
              </div>

              <div>
              <div>
                <p className="text-gray-400">Cantidad: {item.quantity}</p>
                <div className="flex items-center space-x-2">
                  <button className="bg p-1 bg-red-500 rounded-xl">+</button>
                  {item.quantity}
                  <button className="bg p-1 bg-red-500 rounded-xl">-</button>

                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition-colors"
                >
                <FaTrashAlt />
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;