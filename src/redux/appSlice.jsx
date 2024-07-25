import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: true,
        video: [],
        category: "All",
        searchSuggestion: [],
    },
    reducers: {
        toggleSideBar: (state) => {
            state.open = !state.open;
        },
        setHomeVideo : (state, actions) => {
            state.video = actions.payload;
        },
        setCategory: (state, actions) => {
            state.category = actions.payload;
        },
        setShowSuggestion: (state, actions) => {
            state.searchSuggestion = actions.payload;
        }
    }
});

export const { toggleSideBar, setHomeVideo, setCategory, setShowSuggestion } = appSlice.actions;
export default appSlice.reducer;