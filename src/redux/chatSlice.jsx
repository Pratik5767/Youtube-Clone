import { createSlice } from "@reduxjs/toolkit"

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        message: [],
    },
    reducers: {
        setMessage: (state, actions) => {
            state.message.splice(100, 1);
            state.message.push(actions.payload);
        }
    }
})

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer;