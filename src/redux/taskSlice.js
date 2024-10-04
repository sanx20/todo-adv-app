import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks[index].status = action.payload.status;
        },

    },
});

export const { setTasks, addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;