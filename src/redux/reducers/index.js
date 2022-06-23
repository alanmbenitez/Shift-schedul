
import { createSlice } from "@reduxjs/toolkit";
import shifts from "../data/shift.data";


const initialState = {
    shiftAvailable : shifts,
    shiftsTaken: []
}

const allReducers = createSlice({
    name: 'shifts',
    initialState,
    reducers: {
        addTakenShift(state, action) {
            const newItem = action.payload;
            state.shiftsTaken.push(newItem);
            state.shiftAvailable = state.shiftAvailable.filter(item => item.id !== newItem.id)
            state.shiftsTaken = state.shiftsTaken.sort((a, b) => a.id - b.id)
            

          },
        removeTakenShift(state, action) {
            const newItem = action.payload;
            state.shiftsTaken = state.shiftsTaken.filter(item => item.id !== newItem.id)
            state.shiftAvailable.push(newItem);
            state.shiftAvailable = state.shiftAvailable.sort((a, b) => a.id - b.id)
            
          },
    }

})

export default allReducers