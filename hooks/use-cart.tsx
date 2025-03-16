"use client";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'sonner';
import { ProductType } from '@/types/product';

interface CartStore {
  items: ProductType[];
  addItem: (data: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          // Customize the error toast with a red background (or any color of your choice)
          toast.error(" El producto ya está en el carrito. ⚠️", {
            style: {
              backgroundColor: '#f44336', // Red color for error
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '14px',
            }
          });
          return;
        }

        set({ items: [...currentItems, data] });
        // Customize the success toast with a green background (or any color of your choice)
        toast.success(" Producto añadido al carrito 🛍️", {
          style: {
            backgroundColor: '#4CAF50', // Green color for success
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '14px',
          }
        });
      },

      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        // Customize the toast when item is removed with an orange background (for example)
        toast(" Producto eliminado del carrito. 🗑️", {
          style: {
            backgroundColor: '#FF9800', // Orange color for normal toast
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '14px',
          }
        });
      },

      removeAll: () => {
        set({ items: [] });
        // Customize the toast when the cart is cleared with a blue background (for example)
        toast(" Carrito vaciado. 🛒", {
          style: {
            backgroundColor: '#2196F3', // Blue color for normal toast
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '14px',
          }
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
