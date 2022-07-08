import { configureStore } from "@reduxjs/toolkit";
import SliceURL from "./Slice/SliceURL";

export default configureStore(
    {
        reducer:{
            SliceURL
        }
    }
)