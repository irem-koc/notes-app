import { configureStore } from "@reduxjs/toolkit";
import noteSlicer from "./note/noteSlicer";

export const store = configureStore({
    reducer: {
        note: noteSlicer
    }
})