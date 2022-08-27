import create from 'zustand';

const useBearStore = create((set) => ({
  roles: '',
  setroles: (role) => set((state) => ({ ...state, roles: role })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
