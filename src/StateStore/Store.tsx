// store.tsx
import { configureStore } from "@reduxjs/toolkit";
import  isDarkState  from "./Reducers/DarkState";

export const store = configureStore( {
    reducer: {
        Dark: isDarkState,
    } ,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;