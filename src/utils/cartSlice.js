import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
          
            
            const specificItem=state.items.filter((item)=>item.card.info.id);
            const index=state.items.indexOf(specificItem);
            state.items.splice(index,1);
           
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
        
    }
});
export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;