import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-4">
        Revisa tu compra antes de proceder al pago.
      </p>

      <div>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2">
                {item.titulo} - {item.quantity} x ${item.precio}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ir a pagar
      </button>
    </div>
  );
};

export default Checkout;