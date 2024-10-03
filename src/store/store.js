import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./archive/archive.slice";

export const store = configureStore({
    reducer: {
        archiveUser: reducer,
    }
})