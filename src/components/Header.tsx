import { Box, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useActions } from '../store/hooks/useActions'
import DoneIcon from '@mui/icons-material/Done'

const Header: React.FC = (): JSX.Element => {
  const [todoText, setTodoText] = useState<string>('')
  const { addTodo, addTag } = useActions()

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && todoText.trim().length !== 0) {
      addTodo(todoText)
      setTodoText('')
    }
  }

  const handleSubmit = () => {
    if (todoText.trim().length !== 0) {
      addTodo(todoText)
      setTodoText('')
    }
  }

  const handlChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const tags = e.currentTarget.value
      .split(' ')
      .filter((word) => word.startsWith('#') && word.length > 1)
    if (tags.length > 0) {
      addTag(tags)
    }
    setTodoText(e.currentTarget.value)
  }

  return (
    <Box width={'100%'}>
      <Typography variant="h2" color="white" mb={2} textAlign="center">
        Just do it
      </Typography>
      <Box
        sx={{
          display: 'flex',
          // bgcolor: '#9966FF',
          justifyContent: 'space-between',
          mb: 2,
          px: '20px',
          // boxShadow: 3,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Set todo text"
          variant="outlined"
          value={todoText}
          sx={{ width: '90%' }}
          onKeyDown={(e) => handleKeydown(e)}
          onChange={(e) => handlChange(e)}
        />
        <IconButton edge="end" aria-label="comments" onClick={() => handleSubmit()}>
          <DoneIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Header
