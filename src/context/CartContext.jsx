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

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExistente = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      // Si ya existe en el carrito
      if (itemExistente) {
        if (itemExistente.quantity >= item.stock) {
          toast.error(`No hay más stock disponible para ${item.titulo}.`, {
            icon: <MdErrorOutline />,
          });
          return prevItems;
        }

        toast.success(`${item.titulo} agregado al carrito`);

        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      // Si no existe todavía
      toast.success(`${item.titulo} agregado al carrito`);
      return [...prevItems, { ...item, quantity: 1 }];
    });
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
