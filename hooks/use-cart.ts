import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Producto } from "@/types";
import { toast } from "react-hot-toast";

interface CartStore {
  items: Producto[];
  addItem: (data: Producto) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;

}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Producto) => {
      const currentItems = get().items;
      const existingItem = currentItems.find(item => item.id === data.id)
      if (existingItem) {
        return toast("Este producto ya está dentro del carrito.");
      }
      set({ items: [...get().items, data] });
      toast.success("El producto fue agregado al carrito.");
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter(item => item.id !== id)] });
      toast.success("El producto fue eliminado del carrito.");
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;
