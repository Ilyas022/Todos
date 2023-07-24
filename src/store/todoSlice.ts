import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ITodo {
  id: number
  isDone: boolean
  todoText: string
}

interface IinitialState {
  todos: ITodo[]
}

const initialState: IinitialState = {
  todos: [
    {
      id: 1,
      isDone: true,
      todoText: 'Hello to world',
    },
    {
      id: 2,
      isDone: false,
      todoText: 'Go to #shop',
    },
    {
      id: 3,
      isDone: false,
      todoText: 'Walk with dog',
    },
  ],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = { id: state.todos.length + 1, todoText: action.payload, isDone: false }
      state.todos.push(todo)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    updateTodoText: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((item) => item.id === action.payload.id)
      todo!.todoText = action.payload.text
    },
    updateTodoState: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((item) => item.id === action.payload)
      if (todo) {
        todo.isDone = !todo.isDone
      } else state.todos.forEach((todo) => todo.id === action.payload)
    },
  },
})

export default todoSlice
