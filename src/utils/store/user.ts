import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { persist, createJSONStorage } from "zustand/middleware";

interface userState {
  user: User | undefined;
  updateUser: (user: any) => void;
}

interface receiverState {
  receiver: string | undefined;
  updateReceiver: (receiver: any) => void;
}
// export const useUser = create<userState>()(
//   (set) => ({
//     user: undefined,
//     updateUser: (user) => set(() => ({ user: user })),
//   }),
//   {
//     name: "food-storage", // name of the item in the storage (must be unique)
//     storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//   }
// );

export const useUser = create<userState>()(
  persist(
    (set, get) => ({
      user: undefined,
      updateUser: (user) => set(() => ({ user: user })),
    }),
    {
      name: "user", // name of the item in the storage (must be unique)
    }
  )
);

export const useReceiver = create<receiverState>()((set) => ({
  receiver: undefined,
  updateReceiver: (receiver) => set(() => ({ receiver: receiver })),
}));

export const useMesssages = create<any>()((set) => ({
  message_list: [],
  updateMessages: (list: any) => set(() => ({ message_list: list })),
}));
