    import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

    export const studentsAdapter = createEntityAdapter();

    const initialState = studentsAdapter.getInitialState();

    const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: studentsAdapter.addOne,
        removeStudent: studentsAdapter.removeOne,
        updateStudent: studentsAdapter.upsertOne,
    },
    });

    export const { addStudent, removeStudent, updateStudent } = studentsSlice.actions;
    export default studentsSlice.reducer;