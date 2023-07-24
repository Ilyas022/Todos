import { List, Typography } from '@mui/material'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import Todo from './Todo'
import { ITodo } from '../store/todoSlice'

const TodoList: React.FC = (): JSX.Element => {
  const todos = useTypedSelector((store) => {
    if (store.tags.filters.length > 0) {
      const result: ITodo[] = []

      store.todos.todos.forEach((todo) => {
        store.tags.filters.forEach((filter) => {
          if (todo.todoText.includes(filter)) {
            result.push(todo)
          }
        })
      })
      return result
    }
    return store.todos.todos
  })

  return (
    <>
      <Typography variant="h5" textAlign="left" sx={{ mb: '10px' }}>
        Todos
      </Typography>
      <List
        sx={{
          width: '100%',
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '15px',
          maxHeight: '300px',
          overflow: 'auto',
          pr: '10px',
          '&::-webkit-scrollbar': {
            width: 8,
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'grey',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'blue',
            borderRadius: 2,
          },
        }}
      >
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.todoText} isDone={todo.isDone} />
        ))}
      </List>
    </>
  )
}

export default TodoList
