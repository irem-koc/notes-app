import { createSlice, nanoid } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "note",
    initialState: {
        activeColor: "#F06292",
        notes: [{ id: nanoid(), title: "Su iç!", color: "#F06292" }],
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload);
            const { color, title } = action.payload;
            console.log(color, title);
            // console.log(title)
            state.notes = [{ id: nanoid(), title, color }, ...state.notes];
        },
        changeColor: (state, action) => {
            state.activeColor = action.payload;
        },
    },
});
export const { addItem, changeColor } = noteSlice.actions;
export default noteSlice.reducer;
//{ title: title,id: nanoid(),color:color },
