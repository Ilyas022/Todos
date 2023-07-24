import { Box, IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useActions } from '../store/hooks/useActions'
import { useTypedSelector } from '../store/hooks/useTypedSelector'

interface ITag {
  title: string
}

const Tag: React.FC<ITag> = ({ title }: ITag): JSX.Element => {
  const { removeTag, addFilter, removeFilter } = useActions()
  const { filters } = useTypedSelector((store) => store.tags)
  const isFilter = filters.includes(title)
  const bgColor = isFilter ? 'red' : 'burlywood'

  const handleClick = () => {
    if (isFilter) {
      return removeFilter(title)
    }
    addFilter(title)
  }

  return (
    <Box
      sx={{
        bgcolor: bgColor,
        border: '1px solid black',
        borderRadius: '20px',
        p: '10px 12px',
        cursor: 'pointer',
      }}
      onClick={() => handleClick()}
    >
      {title}
      <IconButton
        onClick={(e) => {
          e.stopPropagation()
          removeTag(title)
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </Box>
  )
}

export default Tag
