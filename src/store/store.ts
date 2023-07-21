import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todoSlice'
import tagSlice from './tagSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    tags: tagSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
