import {create} from 'zustand';

export interface ICartItem {
    id: string;
    name: string;
    price: number;
    color: string;
    size: string;
    image: string;
    quantity: number;
}

interface ICartState {
    items: ICartItem[];
    isOpen: boolean;
    addItemToCart: (item: ICartItem) => void;
    removeItemFromCart: (id: string, size: string) => void;
    updateItemQuantity: (id: string, size: string, quantity:number) => void;
    openCart: () => void;
    closeCart: () => void;
}

export const useCartStore = create<ICartState>((set) => ({
    items: [],
    isOpen: false,


    addItemToCart: (item) => set((state) => ({ items: [...state.items, item]})),
    removeItemFromCart: (id, size) => set((state) => ({ items: state.items.filter(item => item.id !== id || item.size !== size) })),
    updateItemQuantity: (id, size, quantity) => set((state) => ({
        items: state.items.map(item =>
            item.id === id && item.size === size ? { ...item, quantity } : item
        )
    })),
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
}));
