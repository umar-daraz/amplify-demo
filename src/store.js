import create from "zustand";

export const useStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const productExists = state.cart.find((a) => a.id === product.id);
      if (productExists) {
        return {
          cart: state.cart.map((cartItem) => {
            if (cartItem.id === product.id) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
          }),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
}));
