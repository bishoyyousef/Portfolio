// StoreProvider.tsx
"use client";
import { Provider } from "react-redux";
import { store } from "@/StateStore/Store";

export default function StoreProvider({children}: {children: React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>
}
