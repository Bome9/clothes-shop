import { create } from "zustand";

interface INavMenuState{
    isMenuOpen: boolean,
    setIsMenuOpen: () => void,
}

export const useNavMenuStore = create<INavMenuState>((set) => ({
    isMenuOpen: false,
    setIsMenuOpen: () => set((state) => ({isMenuOpen: !state.isMenuOpen}))
}))
