import { Box, Container } from '@mui/material'
import TodoList from './components/TodoList'
import Header from './components/Header'
import TagList from './components/TagList'

const App: React.FC = (): JSX.Element => {
  const a: any = 1
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          bgcolor: '#B565A7',
          padding: '24px',
          borderRadius: '28px',
        }}
      >
        <Header />
        <TodoList />
        <TagList />
      </Container>
    </Box>
  )
}

export default App
