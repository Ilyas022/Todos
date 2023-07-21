import { useTypedSelector } from '../store/hooks/useTypedSelector'
import { Box, Typography } from '@mui/material'
import Tag from './Tag'

const TagList: React.FC = (): JSX.Element => {
  const { tags } = useTypedSelector((store) => store.tags)

  return (
    <>
      <Typography variant="h5" textAlign="left" sx={{ mb: '10px' }}>
        Tags
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        {tags.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </Box>
    </>
  )
}

export default TagList
