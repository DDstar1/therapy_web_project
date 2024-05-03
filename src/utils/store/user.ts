import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface userState {
  user: User | undefined;
  updateUser: (user: any) => void;
}

export const useUser = create<userState>()((set) => ({
  user: undefined,
  updateUser: (user) => set(() => ({ user: user })),
}));
