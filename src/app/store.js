import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "../components/counter/counterSlice";

//create a store
const store = configureStore({
    reducer: {
        //add reducer here
        counter: counterSlice.reducer
    }
})

export default store;