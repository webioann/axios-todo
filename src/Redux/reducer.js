import { createSlice } from "@reduxjs/toolkit"

const reducer = createSlice({
    name: "redux",
    initialState: {
        url: 'http://localhost:888/todos',
        input_value: '',
        data: [],
        test: 'TEST FROM REDUX'
    },
    reducers: {
        get_data: (state, actions) => {state.data = actions.payload},
        get_value: (state, actions) => {state.input_value = actions.payload},
    },
});

export const { get_data,get_value } = reducer.actions;

export default reducer.reducer;
