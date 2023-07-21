import { List, Typography } from '@mui/material'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import Todo from './Todo'

const TodoList: React.FC = (): JSX.Element => {
  const { todos } = useTypedSelector((store) => store.todos)

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
