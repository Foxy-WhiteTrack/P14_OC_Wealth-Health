import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
    name: 'itemSliceName',
    initialState: {
        itemsPerPage: 10,
    },
    reducers: {

        changeNbr: (state, action) => {
            state.itemsPerPage = action.payload.itemsPerPage;
        },
    },
});

export const { changeNbr } = itemSlice.actions;
export default itemSlice.reducer;