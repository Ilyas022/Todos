import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IinitialState {
  tags: string[]
}

const initialState: IinitialState = {
  tags: ['#привет', '#дом'],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((tag, index) => {
        if (
          index === action.payload.length - 1 &&
          state.tags[state.tags.length - 1] ===
            action.payload[action.payload.length - 1].slice(0, -1)
        ) {
          state.tags[state.tags.length - 1] = action.payload[action.payload.length - 1]
          return
        }
        if (!state.tags.includes(tag) && !state.tags.find((item) => item.includes(tag))) {
          state.tags.push(tag)
        }
      })
    },
    removeTag: (state, action: PayloadAction<string>) => {
      if (state.tags.includes(action.payload)) {
        state.tags = state.tags.filter((tag) => tag !== action.payload)
      }
    },
  },
})

export default todosSlice
