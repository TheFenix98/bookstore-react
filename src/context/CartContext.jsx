import { createContext, useEffect, useState } from "react";
import { libros } from "../data/books";
import { toast } from "sonner";
import { MdErrorOutline } from "react-icons/md";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const carritoGuardado = localStorage.getItem("cartItems");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

const addToCart = (item, mostrarToast = true) => {
  const itemExistente = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (itemExistente && itemExistente.quantity >= item.stock) {
    if (mostrarToast) {
      toast.error(`No hay más stock disponible para ${item.titulo}.`, {
        icon: <MdErrorOutline />,
      });
    }
    return;
  }

  setCartItems((prevItems) => {
    const existente = prevItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existente) {
      return prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...prevItems, { ...item, quantity: 1 }];
  });

  if (mostrarToast) {
    toast.success(`${item.titulo} agregado al carrito`);
  }
};

  const increaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    const libro = libros.find((libro) => libro.id === id);

    if (item.quantity >= libro.stock) {
      toast.error(
        <>
          No hay más stock disponible para{" "}
          <span className="font-bold">{item.titulo}</span>.
        </>,
        {
          icon: <MdErrorOutline />,
          richColors: true,
        },
      );
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
