import { createSlice } from "@reduxjs/toolkit";

export const SliceURL=createSlice(
    {
        name:"URL",
        initialState:"Gokuuuu",
        reducers:{reset:(set,accion)=>accion.payload}
    }
)


export const {reset}= SliceURL.actions
export default SliceURL.reducer

// import { createSlice } from "@reduxjs/toolkit";