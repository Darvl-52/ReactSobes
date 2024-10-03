import {createSlice} from "@reduxjs/toolkit";


export const archiveSlice = createSlice({
    name: 'archiveUser',
    initialState: [],
    reducers: {
        ToggleToArchive: (state, { payload }) => {
            const isExists = state.some(a => a.id === payload.id)
            if (isExists) {
                const index = state.findIndex(item => item.id === payload.id)
                if (index !== 1) {
                    state.splice(index, 1)
                }
            } else {
                state.push(payload);
            }
        },
    }
})

export const {actions, reducer} = archiveSlice;