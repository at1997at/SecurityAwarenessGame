import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILevel, LevelState } from './types';

const initialState: LevelState = {
    levels: [
        {
            id: 0,
            hasStarted: false,
            finding0: false,
            finding1: false,
            finding2: false,
            finding3: false,
        },
        {
            id: 1,
            hasStarted: false,
            finding0: false,
            finding1: false,
            finding2: false,
            finding3: false,
        },
        {
            id: 2,
            hasStarted: false,
            finding0: false,
            finding1: false,
            finding2: false,
            finding3: false,
        },
    ],
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<ILevel>) => {
            // Implement your increment logic here
        },
        decrement: (state, action: PayloadAction<ILevel>) => {
            // Implement your decrement logic here
        },
        set: (state, action: PayloadAction<ILevel>) => {
            // Implement your set logic here
        },
        updateLevelVariable: (state, action: PayloadAction<ILevel>) => {


            // Implement your update logic here
            state.levels.forEach(item => {


                if (item.id === action.payload.id) {


                    if (action.payload.finding0 !== undefined)
                        item.finding0 = action.payload.finding0;
                    else if (action.payload.finding1 !== undefined)
                        item.finding1 = action.payload.finding1;
                    else if (action.payload.finding2 !== undefined)
                        item.finding2 = action.payload.finding2;
                    else if (action.payload.finding3 !== undefined)
                        item.finding3 = action.payload.finding3;
                }
            })


        },

        levelStart: (state, action: PayloadAction<ILevel>) => {

            // Implement your update logic here
            state.levels.forEach(item => {
                if (item.id === action.payload.id)
                    item.hasStarted = true;
            })

        },


    },
});

export const {increment, decrement, set, updateLevelVariable, levelStart} = counterSlice.actions;

export default counterSlice.reducer;
