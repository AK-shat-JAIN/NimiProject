import { configureStore } from "@reduxjs/toolkit";
import leadSliceReducer from "./Slices/LeadSlice";

const store = configureStore({
    reducer: {
        lead: leadSliceReducer
    },
    devTools: true
})

export default store;