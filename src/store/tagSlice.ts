import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IinitialState {
  tags: string[]
  filters: string[]
}

const initialState: IinitialState = {
  tags: ['#shop'],
  filters: [],
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
    addFilter: (state, action: PayloadAction<string>) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload)
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter((filter) => filter !== action.payload)
    },
  },
})

export default todosSlice
