import { Box, IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useActions } from '../store/hooks/useActions'

interface ITag {
  title: string
}

const Tag: React.FC<ITag> = ({ title }: ITag): JSX.Element => {
  const { removeTag } = useActions()
  return (
    <Box
      sx={{
        bgcolor: 'burlywood',
        border: '1px solid black',
        borderRadius: '20px',
        p: '10px 12px',
      }}
    >
      {title}
      <IconButton onClick={() => removeTag(title)}>
        <DeleteForeverIcon />
      </IconButton>
    </Box>
  )
}

export default Tag
