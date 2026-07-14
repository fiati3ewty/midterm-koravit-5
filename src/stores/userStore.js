import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      username: '',
      token: '',
      setUsername: (username) => set({ username }),
      setToken: (token) => set({ token }),
    }),
    {
      name: 'mid-user-store',
    },
  ),
);
