import React, { useState } from 'react'
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'

import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { useActions } from '../store/hooks/useActions'

interface ITodo {
  id: number
  text: string
  isDone: boolean
}

const Todo: React.FC<ITodo> = React.memo(({ id, text, isDone }: ITodo): JSX.Element => {
  const [todoText, setTodoText] = useState<string>(text)
  const [isEditing, setEditing] = useState<boolean>(false)
  const { updateTodoState, removeTodo, addTag } = useActions()

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && todoText.trim().length !== 0) setEditing(false)
  }

  const handleClick = () => {
    if (!isEditing) {
      setEditing((prev) => !prev)
    }
    if (todoText.trim().length !== 0 && isEditing) {
      setEditing(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const tags = e.currentTarget.value
      .split(' ')
      .filter((word) => word.startsWith('#') && word.length > 1)
    if (tags.length > 0) {
      addTag(tags)
    }
    setTodoText(e.currentTarget.value)
  }

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton sx={{ mr: 1 }} edge="end" aria-label="comments" onClick={() => handleClick()}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="comments" onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
      sx={{ boxShadow: 1, bgcolor: '#55B4B0', p: '10px' }}
      disablePadding
    >
      {isEditing ? (
        <TextField
          id="outlined-basic"
          label="Set todo text"
          variant="outlined"
          sx={{ width: '80%' }}
          value={todoText}
          onKeyDown={(e) => handleKeydown(e)}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <ListItemButton role={undefined} onClick={() => updateTodoState(id)} dense>
          <ListItemIcon>
            <Checkbox edge="start" checked={isDone} disableRipple />
          </ListItemIcon>
          <ListItemText id={`${id}`} primary={todoText} />
        </ListItemButton>
      )}
    </ListItem>
  )
})

export default Todo
