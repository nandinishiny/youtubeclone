import { createSlice } from "@reduxjs/toolkit";
const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:false,
    },
    reducers:{
        openSidebar:(state)=>{
            state.isMenuOpen = !state.isMenuOpen

        }
        
    }

});
export default sidebarSlice.reducer;
export const {openSidebar}= sidebarSlice.actions;