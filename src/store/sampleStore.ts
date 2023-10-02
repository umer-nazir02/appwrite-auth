// useStore.ts
import create from 'zustand';

type State = {
  count: number;
  increment: () => void;
};

const useSampleStore = create<State>(set => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
}));

export default useSampleStore;
