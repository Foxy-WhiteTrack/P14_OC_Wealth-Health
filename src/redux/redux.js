import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemsPerPage: 10, // Définissez la valeur par défaut
};

const itemSlice = createSlice({
    name: 'itemSliceName',
    initialState,
    reducers: {
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload;
        },
    },
});

export const { setItemsPerPage } = itemSlice.actions;
export default itemSlice.reducer;
