import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './redux/slicers/task.slice'

export default configureStore({
  reducer: {
    task: taskReducer,
  },
})
