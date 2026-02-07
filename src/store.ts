
import { create } from 'zustand'

interface State {
    score: number
    increment: (by: number) => void
    reset: () => void
}

export const useStore = create<State>((set) => ({
    score: 0,
    increment: (by) => set((state) => ({ score: state.score + by })),
    reset: () => set({ score: 0 }),
}))
