import tagSlice from './tagSlice'
import todoSlice from './todoSlice'

const rootActions = {
  ...todoSlice.actions,
  ...tagSlice.actions,
}

export default rootActions
