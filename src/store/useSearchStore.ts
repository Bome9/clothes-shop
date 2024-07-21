import { create } from "zustand"

interface ISearchState{
    searchIsOpen: boolean,
    searchValue: string,
    setSearchValue: (value: string) => void,
    setSearchIsOpen: () => void,
}


export const useSearchStore = create<ISearchState>((set) => ({
    searchIsOpen: false,
    searchValue: '',
    setSearchValue: (value) => set((state) => ({searchValue: value})),
    setSearchIsOpen: () => set((state) => ({searchIsOpen: !state.searchIsOpen}))
}))
