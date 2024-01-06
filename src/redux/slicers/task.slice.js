import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      const { values } = action.payload
      const newTask = {
        id: uuidv4(),
        ...values,
      }
      state.taskList.unshift(newTask)
    },
    updateTask: (state, action) => {
      const { id, values } = action.payload
      const index = state.taskList.findIndex((item) => item.id === id)
      state.taskList.splice(index, 1, {
        id: id,
        ...values,
      })
    },
    deleteTask: (state, action) => {
      const { id } = action.payload
      state.taskList = state.taskList.filter((item) => item.id !== id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, updateTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer
